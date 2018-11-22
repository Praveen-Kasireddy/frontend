import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksFilterType } from '@core/enum/tasks-filter-type.enum';
import { ProgressState } from '@core/models';
import { Product } from '@core/models/project/product';
import { Project } from '@core/models/project/project';
import { User } from '@core/models/user';
import { AssignmentService } from '@core/services/project/assignment.service';
import { ProductButtonResizeService } from '@core/services/project/product-button-resize.service';
import { ProductService } from '@core/services/project/product.service';
import { LocalStorageService, SharedStorageService } from 'ngx-store';
import { StatusFilterButtonInfo } from '../../shared/project-scope/status-filter-button-info';
import { TasksFilterInfo } from '../../shared/project-scope/tasks-filer-info';
import { DeliverableListComponent } from './deliverable-list/deliverable-list.component';
import { SectionComponent } from './section/section.component';

@Component({
    templateUrl: './project-scope.component.html',
    styleUrls: ['./project-scope.component.scss']
})
export class ProjectScopeComponent implements OnInit {
    @ViewChild(SectionComponent)
    section: SectionComponent;
    @ViewChild(DeliverableListComponent)
    deliverables: DeliverableListComponent;
    isMyTasksView: boolean;
    selectedProject: Project;
    selectedProduct: Product;
    errorMessage: string;
    products: Product[] = [];
    isPopupVisible: boolean = false;
    showFilter: boolean;
    filterInfo: TasksFilterInfo = new TasksFilterInfo();
    filterButtonInfos: StatusFilterButtonInfo[];

    // enum variable used in the template
    tasksFilterType = TasksFilterType;

    private productToRemove: Product;
    currentUser: User;

    constructor(
        private _sharedStorageService: SharedStorageService,
        private _productService: ProductService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _localStorageService: LocalStorageService,
        private _assignmentService: AssignmentService,
        private _productButtonResizeService: ProductButtonResizeService,
        private _ref: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.isMyTasksView = String(this._router.url).endsWith('/tasks');
        this.currentUser = this._localStorageService.get('currentUser');
        this.selectedProject = this._sharedStorageService.get('selectedProject');
        this.filterInfo.filterType = this.isMyTasksView ? TasksFilterType.My : TasksFilterType.None;

        this._route.data.subscribe((data: { states: ProgressState[] }) => {
            this.filterButtonInfos = data.states.map<StatusFilterButtonInfo>(
                s => ({ id: s.id, caption: s.name, isActive: true } as StatusFilterButtonInfo)
            );
            this.setAllStatesInFilter();
        });
        this.requeryProducts();
    }

    onRemove(product: any) {
        this.productToRemove = product;
        this.isPopupVisible = true;
    }

    closePopup(isConfirmed: boolean) {
        this.isPopupVisible = false;
        if (isConfirmed && this.productToRemove !== undefined) {
            this._productService.deactivate(this.selectedProject.projectGuid, this.productToRemove).subscribe(data => {
                this.requeryProducts();
                this._productButtonResizeService.withdrawWidth(this.productToRemove.guid);
            });
        }
    }

    requeryProducts() {
        if (this.selectedProject) {
            this._productService.getActive(this.selectedProject.projectGuid).subscribe(
                products => {
                    this.products = products;
                    this.selectFirstProduct();
                },
                error => (this.errorMessage = <any>error)
            );
        }
    }

    selectProduct(product: Product) {
        this.selectedProduct = product;
        this._assignmentService.setProduct(product ? product.guid : undefined);
        this.section.showScopeItems(product);
    }

    onDeliverablesSelected(event: any): void {
        this.requeryProducts();
    }

    selectFirstProduct(): void {
        this.selectProduct(this.products.length > 0 ? this.products[0] : undefined);
    }

    addDeliverables(): void {
        this.deliverables.openPopup();
    }

    toggleFilter() {
        this.showFilter = !this.showFilter;
    }

    onSetFilter(filterInfo: TasksFilterInfo) {
        this.filterInfo = filterInfo;
        this._ref.detectChanges();
        this.section.requeryChapters();
    }

    private setAllStatesInFilter() {
        this.filterInfo.statusFilter = [];

        for (const state of this.filterButtonInfos) {
            this.filterInfo.statusFilter.push(state.id);
        }
    }
}
