// Hackish merge between the XLSX-style library (which doesn't have sheet_to_html functionality) and the XLSX library (which does).
export const HTML_ = (function() {
    var wtregex = /(^\s|\s$|\n)/;
    function isval(x) { return x !== undefined && x !== null; }
    function keys(o) { return Object.keys(o); }
    function wxt_helper(h) { return keys(h).map(function(k) { return " " + k + '="' + h[k] + '"';}).join(""); }
    function writextag(f,g,h) { return '<' + f + (isval(h) ? wxt_helper(h) : "") + (isval(g) ? (g.match(wtregex)?' xml:space="preserve"' : "") + '>' + g + '</' + f : "/") + '>';}

	function make_html_row(ws, r, R, o) {
		var M = (ws['!merges'] ||[]);
		var oo = [];
		var nullcell = "<td" + (o.editable ? ' contenteditable="true"' : "" ) + "></td>";
		for(var C = r.s.c; C <= r.e.c; ++C) {
			var RS = 0, CS = 0;
			for(var j = 0; j < M.length; ++j) {
				if(M[j].s.r > R || M[j].s.c > C) continue;
				if(M[j].e.r < R || M[j].e.c < C) continue;
				if(M[j].s.r < R || M[j].s.c < C) { RS = -1; break; }
				RS = M[j].e.r - M[j].s.r + 1; CS = M[j].e.c - M[j].s.c + 1; break;
			}
			if(RS < 0) continue;
			var coord = XLSX.utils.encode_cell({r:R,c:C});
			var cell = o.dense ? (ws[R]||[])[C] : ws[coord];
			if(!cell || cell.v == null) { oo.push(nullcell); continue; }
			/* TODO: html entities */
			var w = cell.h || (cell.w || (XLSX.utils.format_cell(cell), cell.w) || "");
			var sp = {};
			if(RS > 1) sp.rowspan = RS;
			if(CS > 1) sp.colspan = CS;
			if(o.editable) sp.contenteditable = "true";
			sp.id = "sjs-" + coord;
			oo.push(writextag('td', w, sp));
		}
		var preamble = "<tr>";
		return preamble + oo.join("") + "</tr>";
	}
	function make_html_preamble(ws, R, o) {
		var out = [];
		return out.join("") + '<table>';
	}
	var _BEGIN = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>';
	var _END = '</body></html>';
	function sheet_to_html(ws, opts, wb) {
		var o = opts || {};
		var header = o.header != null ? o.header : _BEGIN;
		var footer = o.footer != null ? o.footer : _END;
		var out = [header];
		var r = XLSX.utils.decode_range(ws['!ref']);
		o.dense = Array.isArray(ws);
		out.push(make_html_preamble(ws, r, o));
		for(var R = r.s.r; R <= r.e.r; ++R) out.push(make_html_row(ws, r, R, o));
		out.push("</table>" + footer);
		return out.join("");
	}

	return {
		_row: make_html_row,
		BEGIN: _BEGIN,
		END: _END,
		_preamble: make_html_preamble,
		from_sheet: sheet_to_html
	};
})();