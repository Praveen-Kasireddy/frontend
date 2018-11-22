class BackendFileWorkflowService {
    constructor() {
        this.prefix = 'https://master-kosmos-etl-backend.apps.motius.ci/';
        //this.prefix = '/';
        this.excel = this.prefix + 'api/excel/';
    }

    async uploadExcelFile(file) {
        // Prepare form data.
        const formData = new FormData();
        formData.append('name', file.name);
        formData.append('upload', file);

        // Sent to backend.
        let data;
        try {
            const response = await fetch(this.excel, {
                method: 'POST',
                body: formData
            });

            // Parse response.
            data = await response.json();
            data = data.json;
        } catch (e) {
            data = null;
        }
        localStorage.setItem('uploadExcelFile', JSON.stringify(data));
        return data;
    }
}

export const backendFileWorkflowService = new BackendFileWorkflowService();
