$(document).ready(function() {
    if (document.title == 'Send Money - PayPal') {
	$('<a id="paypal-addon-recalculate">Add Transaction Costs</a>').insertAfter($('#amount'));

	$('#paypal-addon-recalculate').click(function(event) {
	    event.preventDefault();
	    amount = $('#amount').val();
	    amount = amount * 1.04;
	    $('#amount').val(amount);
	});
    }
});
