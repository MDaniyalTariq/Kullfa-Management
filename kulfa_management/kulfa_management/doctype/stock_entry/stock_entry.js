// Copyright (c) 2025, SimHeights and contributors
// For license information, please see license.txt

frappe.ui.form.on('Stock Entry', {
    quantity: function(frm) {
        frm.set_value('total_amount', frm.doc.quantity * frm.doc.unit_price);
    },
    unit_price: function(frm) {
        frm.set_value('total_amount', frm.doc.quantity * frm.doc.unit_price);
    }
});

