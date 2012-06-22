$(document).ready(function() {
    if (document.title == 'Send Money - PayPal') {
	console.log(window.s);
	$('<a id="paypal-addon-recalculate" style="padding-left: 4px; color: #ccc;">Add Transaction Costs</a>').insertAfter($('#amount'));

	$('#amount').bind('propertychange keyup input paste', function(event_change) {
	    if ($('#paypal-addon-recalculate').hasClass('paypal-addon-ready'))
		return;

	    $('#paypal-addon-recalculate').css('color', 'green');
	    $('#paypal-addon-recalculate').css('cursor', 'pointer');
	    $('#paypal-addon-recalculate').addClass("paypal-addon-ready");

	    $('#paypal-addon-recalculate').one('click', function(event) {
		event.preventDefault();
		amount = $('#amount').val();
		amount = amount * 1.04;
		amount = amount.toFixed(2);
		$('#amount').val(amount);
		$('#paypal-addon-recalculate').unbind('click');
		$('#paypal-addon-recalculate').css('color', '#ccc');
		$('#paypal-addon-recalculate').css('cursor', 'default');
		$('#paypal-addon-recalculate').removeClass("paypal-addon-ready");
	    });
	});

    }
});
