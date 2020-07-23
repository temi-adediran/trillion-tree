window.scwDisableJsAJAX = true;

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */



/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */

/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */



window.scwAccordionsPlugin = window.scwAccordionsPlugin || {};

window.SEMICOLON_accordionsInit = function( $accordionEl ){

	$accordionEl = $accordionEl.filter(':not(.customjs)');

	if( $accordionEl.length < 1 ){
		return true;
	}

	$accordionEl.each( function(){
		let element			= $(this),
			elState			= element.attr('data-state'),
			elActive		= element.attr('data-active') || 1,
			elActiveClass	= element.attr('data-active-class') || '',
			elCollapsible	= element.attr('data-collapsible') || 'false',
			windowHash		= location.hash,
			accActive;

		elActive = Number( elActive ) - 1;

		if( typeof windowHash !== 'undefined' && windowHash != '' ) {
			accActive = element.find('.accordion-header'+ windowHash);
			if( accActive.length > 0 ) {
				elActive = accActive.index() / 2;
			}
		}

		element.find('.accordion-content').hide();

		if( elState != 'closed' ) {
			element.find('.accordion-header:eq('+ Number(elActive) +')').addClass('accordion-active ' + elActiveClass).next().show();
		}

		element.find('.accordion-header').off( 'click' ).on( 'click', function(){
			if( $(this).next().is(':hidden') ) {
				element.find('.accordion-header').removeClass('accordion-active ' + elActiveClass).next().slideUp("normal");
				let clickTarget = $(this);
				$(this).toggleClass('accordion-active ' + elActiveClass).next().stop(true,true).slideDown("normal", function(){
					if( ( $('body').hasClass('device-sm') || $('body').hasClass('device-xs') ) && element.hasClass('scroll-on-open') ) {
						$('html,body').stop(true,true).animate({
							'scrollTop': clickTarget.offset().top - ( SEMICOLON.initialize.topScrollOffset() - 40 )
						}, 800, 'easeOutQuad' );
					}
				});
			} else {
				if( elCollapsible == 'true' ) {
					$(this).toggleClass('acctitlec').next().stop(true,true).slideUp("normal");
				}
			}
			return false;
		});
	});

};



/*! jQuery Validation Plugin - v1.19.2 - 5/23/2020
 * https://jqueryvalidation.org/
 * Copyright (c) 2020 Jörn Zaefferer; Licensed MIT */

/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */

window.scwAjaxFormPlugin = window.scwAjaxFormPlugin || {};

window.SEMICOLON_ajaxFormInit = function( $ajaxForm ){

	$ajaxForm = $ajaxForm.filter(':not(.customjs)');

	if( $ajaxForm.length < 1 ){
		return true;
	}

	$ajaxForm.each( function(){
		let element		= $(this),
			$body		= $('body'),
			elForm		= element.find('form'),
			elFormId	= elForm.attr('id'),
			elAlert		= element.attr('data-alert-type'),
			elLoader	= element.attr('data-loader'),
			elResult	= element.find('.form-result'),
			elRedirect	= element.attr('data-redirect'),
			defButton, alertType;

		if( !elAlert ) { elAlert = 'notify'; }

		if( elFormId ) {
			$body.addClass( elFormId + '-ready' );
		}

		element.find('form').validate({
			errorPlacement: function(error, elementItem) {
				if( elementItem.parents('.form-group').length > 0 ) {
					error.appendTo( elementItem.parents('.form-group') );
				} else {
					error.insertAfter( elementItem );
				}
			},
			focusCleanup: true,
			submitHandler: function(form) {

				elResult.hide();

				if( elLoader == 'button' ) {
					defButton = $(form).find('button');
					defButtonText = defButton.html();

					defButton.html('<i class="icon-line-loader icon-spin m-0"></i>');
				} else {
					$(form).find('.form-process').fadeIn();
				}

				if( elFormId ) {
					$body.removeClass( elFormId + '-ready ' + elFormId + '-complete ' + elFormId + '-success ' + elFormId + '-error' ).addClass( elFormId + '-processing' );
				}

				$(form).ajaxSubmit({
					target: elResult,
					dataType: 'json',
					success: function( data ) {
						if( elLoader == 'button' ) {
							defButton.html( defButtonText );
						} else {
							$(form).find('.form-process').fadeOut();
						}

						if( data.alert != 'error' && elRedirect ){
							window.location.replace( elRedirect );
							return true;
						}

						if( elAlert == 'inline' ) {
							if( data.alert == 'error' ) {
								alertType = 'alert-danger';
							} else {
								alertType = 'alert-success';
							}

							elResult.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + alertType ).html( data.message ).slideDown( 400 );
						} else if( elAlert == 'notify' ) {
							elResult.attr( 'data-notify-type', data.alert ).attr( 'data-notify-msg', data.message ).html('');
							SEMICOLON.widget.notifications({ el: elResult });
						}

						if( data.alert != 'error' ) {
							$(form).resetForm();
							$(form).find('.btn-group > .btn').removeClass('active');

							if( (typeof tinyMCE != 'undefined') && tinyMCE.activeEditor && !tinyMCE.activeEditor.isHidden() ){
								tinymce.activeEditor.setContent('');
							}

							let rangeSlider = $(form).find('.input-range-slider');
							if( rangeSlider.length > 0 ) {
								rangeSlider.each( function(){
									let range = $(this).data('ionRangeSlider');
									range.reset();
								});
							}

							let ratings = $(form).find('.input-rating');
							if( ratings.length > 0 ) {
								ratings.each( function(){
									$(this).rating('reset');
								});
							}

							let selectPicker = $(form).find('.selectpicker');
							if( selectPicker.length > 0 ) {
								selectPicker.each( function(){
									$(this).selectpicker('val', '');
									$(this).selectpicker('deselectAll');
								});
							}

							$(form).find('.input-select2,select[data-selectsplitter-firstselect-selector]').change();

							$(form).trigger( 'formSubmitSuccess' );
							$body.removeClass( elFormId + '-error' ).addClass( elFormId + '-success' );
						} else {
							$(form).trigger( 'formSubmitError' );
							$body.removeClass( elFormId + '-success' ).addClass( elFormId + '-error' );
						}

						if( elFormId ) {
							$body.removeClass( elFormId + '-processing' ).addClass( elFormId + '-complete' );
						}

						if( $(form).find('.g-recaptcha').children('div').length > 0 ) { grecaptcha.reset(); }
					}
				});
			}
		});

	});

};



window.scwAjaxPortfolioPlugin = window.scwAjaxPortfolioPlugin || {};

let $portfolioAjaxItems			= $('.portfolio-ajax').find('.portfolio-item'),
	$portfolioDetails			= $('#portfolio-ajax-wrap'),
	$portfolioDetailsContainer	= $('#portfolio-ajax-container'),
	$portfolioAjaxLoader		= $('#portfolio-ajax-loader'),
	prevPostPortId				= '';

window.SEMICOLON_portfolioAjaxloadInit = function(){
	if( $('.portfolio-ajax').length < 1 ){
		return true;
	}

	$('.portfolio-ajax .portfolio-item a.portfolio-ajax-trigger').off( 'click' ).on( 'click', function(e) {
		let portPostId = $(this).parents('.portfolio-item').attr('id');
		if( !$(this).parents('.portfolio-item').hasClass('portfolio-active') ) {
			SEMICOLON_portfolioLoadItem(portPostId, prevPostPortId);
		}
		e.preventDefault();
	});
};

window.SEMICOLON_portfolionewNextPrev = function( portPostId ){
	let portNext = SEMICOLON_portfolioGetNextItem(portPostId);
	let portPrev = SEMICOLON_portfolioGetPrevItem(portPostId);
	$('#next-portfolio').attr('data-id', portNext);
	$('#prev-portfolio').attr('data-id', portPrev);
};

window.SEMICOLON_portfolioLoadItem = function( portPostId, prevPostPortId, getIt ){
	if(!getIt) { getIt = false; }
	let portNext = SEMICOLON_portfolioGetNextItem(portPostId);
	let portPrev = SEMICOLON_portfolioGetPrevItem(portPostId);
	if(getIt == false) {
		SEMICOLON_portfolioCloseItem();
		$portfolioAjaxLoader.fadeIn();
		let portfolioDataLoader = $('#' + portPostId).attr('data-loader');
		$portfolioDetailsContainer.load(portfolioDataLoader, { portid: portPostId, portnext: portNext, portprev: portPrev },
		function(){
			SEMICOLON_portfolioInitializeAjax(portPostId);
			SEMICOLON_portfolioOpenItem();
			$portfolioAjaxItems.removeClass('portfolio-active');
			$('#' + portPostId).addClass('portfolio-active');
		});
	}
};

window.SEMICOLON_portfolioCloseItem = function(){
	if( $portfolioDetails && $portfolioDetails.height() > 32 ) {
		$portfolioAjaxLoader.fadeIn();
		$portfolioDetails.find('#portfolio-ajax-single').fadeOut('600', function(){
			$(this).remove();
		});
		$portfolioDetails.removeClass('portfolio-ajax-opened');
	}
};

window.SEMICOLON_portfolioOpenItem = function(){
	let noOfImages = $portfolioDetails.find('img').length;
	let noLoaded = 0;

	if( noOfImages > 0 ) {
		$portfolioDetails.find('img').on('load', function(){
			noLoaded++;
			let topOffsetScroll = SEMICOLON.initialize.topScrollOffset();
			if(noOfImages === noLoaded) {
				$portfolioDetailsContainer.css({ 'display': 'block' });
				$portfolioDetails.addClass('portfolio-ajax-opened');
				$portfolioAjaxLoader.fadeOut();
				setTimeout(function(){
					SEMICOLON.widget.loadFlexSlider();
					SEMICOLON.initialize.lightbox({ 'parent': $portfolioDetails });
					SEMICOLON.initialize.resizeVideos();
					SEMICOLON.widget.masonryThumbs();
					$('html,body').stop(true).animate({
						'scrollTop': $portfolioDetails.offset().top - topOffsetScroll
					}, 900, 'easeOutQuad');
				},500);
			}
		});
	} else {
		let topOffsetScroll = SEMICOLON.initialize.topScrollOffset();
		$portfolioDetailsContainer.css({ 'display': 'block' });
		$portfolioDetails.addClass('portfolio-ajax-opened');
		$portfolioAjaxLoader.fadeOut();
		setTimeout(function(){
			SEMICOLON.widget.loadFlexSlider();
			SEMICOLON.initialize.lightbox({ 'parent': $portfolioDetails });
			SEMICOLON.initialize.resizeVideos();
			SEMICOLON.widget.masonryThumbs();
			$('html,body').stop(true).animate({
				'scrollTop': $portfolioDetails.offset().top - topOffsetScroll
			}, 900, 'easeOutQuad');
		},500);
	}
};

window.SEMICOLON_portfolioGetNextItem = function( portPostId ){
	let portNext = '';
	let hasNext = $('#' + portPostId).next();
	if(hasNext.length != 0) {
		portNext = hasNext.attr('id');
	}
	return portNext;
};

window.SEMICOLON_portfolioGetPrevItem = function( portPostId ){
	let portPrev = '';
	let hasPrev = $('#' + portPostId).prev();
	if(hasPrev.length != 0) {
		portPrev = hasPrev.attr('id');
	}
	return portPrev;
};

window.SEMICOLON_portfolioInitializeAjax = function( portPostId ){
	prevPostPortId = $('#' + portPostId);

	$('#next-portfolio, #prev-portfolio').off( 'click' ).on( 'click', function() {
		let portPostId = $(this).attr('data-id');
		$portfolioAjaxItems.removeClass('portfolio-active');
		$('#' + portPostId).addClass('portfolio-active');
		SEMICOLON_portfolioLoadItem(portPostId,prevPostPortId);
		return false;
	});

	$('#close-portfolio').off( 'click' ).on( 'click', function() {
		$portfolioDetailsContainer.fadeOut('600', function(){
			$portfolioDetails.find('#portfolio-ajax-single').remove();
		});
		$portfolioDetails.removeClass('portfolio-ajax-opened');
		$portfolioAjaxItems.removeClass('portfolio-active');
		return false;
	});
};



window.scwAnimationsPlugin = window.scwAnimationsPlugin || {};

window.SEMICOLON_animationsInit = function( $animationEl ){

	$animationEl = $animationEl.filter(':not(.customjs)');

	if( $animationEl.length < 1 ){
		return true;
	}

	let SELECTOR			= '[data-animate]',
		ANIMATE_CLASS_NAME	= 'animated';

	let isAnimated = function(element) {
		element.classList.contains(ANIMATE_CLASS_NAME)
	};

	let optionsInOb = {
		threshold: 0.5
	}

	let intersectionObserver = new IntersectionObserver(
		function(entries, observer) {
			entries.forEach( function(entry) {

				let thisElement				= $(entry.target),
					elAnimation				= thisElement.attr('data-animate'),
					elAnimOut				= thisElement.attr('data-animate-out'),
					elAnimDelay				= thisElement.attr('data-delay'),
					elAnimDelayOut			= thisElement.attr('data-delay-out'),
					elAnimDelayTime			= 0,
					elAnimDelayOutTime		= 3000;

				if( thisElement.parents('.fslider.no-thumbs-animate').length > 0 ) { return true; }
				if( thisElement.parents('.swiper-slide').length > 0 ) { return true; }

				if( elAnimDelay ) { elAnimDelayTime = Number( elAnimDelay ) + 500; } else { elAnimDelayTime = 500; }
				if( elAnimOut && elAnimDelayOut ) { elAnimDelayOutTime = Number( elAnimDelayOut ) + elAnimDelayTime; }

				if( !thisElement.hasClass('animated') ) {
					thisElement.addClass('not-animated');
					if (entry.intersectionRatio > 0) {

						setTimeout(function() {
							thisElement.removeClass('not-animated').addClass( elAnimation + ' animated');
						}, elAnimDelayTime);

						if( elAnimOut ) {
							setTimeout( function() {
								thisElement.removeClass( elAnimation ).addClass( elAnimOut );
							}, elAnimDelayOutTime );
						}

					}
				}

				if( !thisElement.hasClass('not-animated') ) {
					observer.unobserve(entry.target);
				}
			});
		}, optionsInOb
	);

	let elements = [].filter.call(
		document.querySelectorAll(SELECTOR),
		function(element){
			return !isAnimated(element, ANIMATE_CLASS_NAME);
		});

	elements.forEach( function(element){
		return intersectionObserver.observe(element)
	});

};



/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */

window.SEMICOLON_carouselInit = function( $carouselEl ){

	$carouselEl = $carouselEl.filter(':not(.customjs)');

	if( $carouselEl.length < 1 ){
		return true;
	}

	$carouselEl.each( function(){
		let element				= $(this),
			elItems				= element.attr('data-items') || 4,
			elItemsXl			= element.attr('data-items-xl') || Number( elItems ),
			elItemsLg			= element.attr('data-items-lg') || Number( elItemsXl ),
			elItemsMd			= element.attr('data-items-md') || Number( elItemsLg ),
			elItemsSm			= element.attr('data-items-sm') || Number( elItemsMd ),
			elItemsXs			= element.attr('data-items-xs') || Number( elItemsSm ),
			elLoop				= element.attr('data-loop'),
			elAutoPlay			= element.attr('data-autoplay'),
			elSpeed				= element.attr('data-speed') || 250,
			elAnimateIn			= element.attr('data-animate-in'),
			elAnimateOut		= element.attr('data-animate-out'),
			elNav				= element.attr('data-nav'),
			elPagi				= element.attr('data-pagi'),
			elMargin			= element.attr('data-margin') || 20,
			elStage				= element.attr('data-stage-padding') || 0,
			elMerge				= element.attr('data-merge'),
			elStart				= element.attr('data-start') || 0,
			elRewind			= element.attr('data-rewind'),
			elSlideBy			= element.attr('data-slideby') || 1,
			elCenter			= element.attr('data-center'),
			elLazy				= element.attr('data-lazyload'),
			elVideo				= element.attr('data-video'),
			elRTL				= element.attr('data-rtl'),
			elAutoPlayTime		= 5000,
			elAutoPlayHoverP 	= true;

		if( elSlideBy == 'page' ) {
			elSlideBy = 'page';
		} else {
			elSlideBy = Number(elSlideBy);
		}

		if( elLoop == 'true' ){ elLoop = true; } else { elLoop = false; }
		if( !elAutoPlay ){
			elAutoPlay = false;
			elAutoPlayHoverP = false;
		} else {
			elAutoPlayTime = Number(elAutoPlay);
			elAutoPlay = true;
		}
		if( !elAnimateIn ) { elAnimateIn = false; }
		if( !elAnimateOut ) { elAnimateOut = false; }
		if( elNav == 'false' ){ elNav = false; } else { elNav = true; }
		if( elPagi == 'false' ){ elPagi = false; } else { elPagi = true; }
		if( elRewind == 'true' ){ elRewind = true; } else { elRewind = false; }
		if( elMerge == 'true' ){ elMerge = true; } else { elMerge = false; }
		if( elCenter == 'true' ){ elCenter = true; } else { elCenter = false; }
		if( elLazy == 'true' ){ elLazy = true; } else { elLazy = false; }
		if( elVideo == 'true' ){ elVideo = true; } else { elVideo = false; }
		if( elRTL == 'true' || $('body').hasClass('rtl') ){ elRTL = true; } else { elRTL = false; }

		let carousel = element.owlCarousel({
			margin: Number(elMargin),
			loop: elLoop,
			stagePadding: Number(elStage),
			merge: elMerge,
			startPosition: Number(elStart),
			rewind: elRewind,
			slideBy: elSlideBy,
			center: elCenter,
			lazyLoad: elLazy,
			nav: elNav,
			navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
			autoplay: elAutoPlay,
			autoplayTimeout: elAutoPlayTime,
			autoplayHoverPause: elAutoPlayHoverP,
			dots: elPagi,
			smartSpeed: Number(elSpeed),
			fluidSpeed: Number(elSpeed),
			video: elVideo,
			animateIn: elAnimateIn,
			animateOut: elAnimateOut,
			rtl: elRTL,
			responsive:{
				0:{ items: elItemsXs },
				576:{ items: elItemsSm },
				768:{ items: elItemsMd },
				992:{ items: elItemsLg },
				1200:{ items: elItemsXl }
			},
			onInitialized: function(){
				SEMICOLON.slider.sliderDimensions({ 'parent': element.parents('.slider-element') });
				SEMICOLON.initialize.lightbox({ 'parent': element });
				SEMICOLON.widget.hoverAnimation({ 'parent': element });
				SEMICOLON.widget.loadFlexSlider({ 'parent': element });
				SEMICOLON.initialize.resizeVideos();
				if( element.find('.owl-dot').length > 0 ) {
					element.addClass('with-carousel-dots');
				}
			}
		});

		$(window).on( 'lazyLoadLoaded', function(){
			if( element.find('.lazy').length == element.find('.lazy.lazy-loaded').length ) {
				lazyLoadInstance.update();
				setTimeout( function(){
					carousel.trigger( 'refresh.owl.carousel' );
				}, 500 );
			}
		});

	});

};



/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function r(){}function i(n,t,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(e){}t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var u in i)i[u]&&(f+="; "+u,!0!==i[u]&&(f+="="+i[u].split(";")[0]));return document.cookie=n+"="+t+f}}function c(e,t){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var f=i[c].split("="),u=f.slice(1).join("=");t||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var a=n(f[0]);if(u=(o.read||o)(u,a)||n(u),t)try{u=JSON.parse(u)}catch(e){}if(r[a]=u,e===a)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(n,t){i(n,"",e(t,{expires:-1}))},r.defaults={},r.withConverter=t,r}(function(){})});

window.SEMICOLON_cookieInit = function( $cookieEl ){

	$cookieEl = $cookieEl.filter('.gdpr-settings:not(.customjs)');

	if( $cookieEl.length < 1 ){
		return true;
	}

	let elSpeed		= $cookieEl.attr('data-speed') || 300,
		elExpire	= $cookieEl.attr('data-expire') || 30,
		elDelay		= $cookieEl.attr('data-delay') || 1500,
		elPersist	= $cookieEl.attr('data-persistent'),
		elDirection	= 'bottom',
		elHeight	= $cookieEl.outerHeight() + 100,
		elWidth		= $cookieEl.outerWidth() + 100,
		elProp		= {},
		elSize;

	if( elPersist == 'true' ) {
		Cookies.set('websiteUsesCookies', '');
	}

	if( $cookieEl.hasClass('gdpr-settings-sm') && $cookieEl.hasClass('gdpr-settings-right') ) {
		elDirection = 'right';
	} else if( $cookieEl.hasClass('gdpr-settings-sm') ) {
		elDirection = 'left';
	}

	if( elDirection == 'left' ) {
		elSize	= -elWidth;
		elProp	= { 'left': elSize, 'right': 'auto' };
		elProp.marginLeft = '1rem';
	} else if( elDirection == 'right' ) {
		elSize	= -elWidth;
		elProp	= { 'right': elSize, 'left': 'auto' };
		elProp.marginRight = '1rem';
	} else {
		elSize	= -elHeight;
		elProp[elDirection] = elSize;
	}

	$cookieEl.css( elProp );

	if( Cookies.get('websiteUsesCookies') != 'yesConfirmed' ) {
		elProp[elDirection] = 0;
		elProp.opacity = 1;
		setTimeout( function(){
			$cookieEl.css( elProp );
		}, Number( elDelay ) );
	}

	$('.gdpr-accept').off( 'click' ).on( 'click', function(){
		elProp[elDirection] = elSize;
		elProp.opacity = 0;
		$cookieEl.css( elProp );
		Cookies.set('websiteUsesCookies', 'yesConfirmed', { expires: Number( elExpire ) });
		return false;
	});
};



/** Abstract base class for collection plugins.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. */


/*! http://keith-wood.name/countdown.html
	Countdown for jQuery v2.1.0.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) January 2008.
	Available under the MIT (http://keith-wood.name/licence.html) license.
	Please attribute the author if you use it.
*/
!function(a){"use strict";var b="countdown",c=0,d=1,e=2,f=3,g=4,h=5,i=6;a.JQPlugin.createPlugin({name:b,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:"dHMS",layout:"",compact:!1,padZeroes:!1,significant:0,description:"",expiryUrl:"",expiryText:"",alwaysExpire:!1,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{"":{labels:["Years","Months","Weeks","Days","Hours","Minutes","Seconds"],labels1:["Year","Month","Week","Day","Hour","Minute","Second"],compactLabels:["y","m","w","d"],whichLabels:null,digits:["0","1","2","3","4","5","6","7","8","9"],timeSeparator:":",isRTL:!1}},_rtlClass:b+"-rtl",_sectionClass:b+"-section",_amountClass:b+"-amount",_periodClass:b+"-period",_rowClass:b+"-row",_holdingClass:b+"-holding",_showClass:b+"-show",_descrClass:b+"-descr",_timerElems:[],_init:function(){function b(a){var h=a<1e12?e?window.performance.now()+window.performance.timing.navigationStart:d():a||d();h-g>=1e3&&(c._updateElems(),g=h),f(b)}var c=this;this._super(),this._serverSyncs=[];var d="function"==typeof Date.now?Date.now:function(){return(new Date).getTime()},e=window.performance&&"function"==typeof window.performance.now,f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null,g=0;!f||a.noRequestAnimationFrame?(a.noRequestAnimationFrame=null,a.countdown._timer=setInterval(function(){c._updateElems()},1e3)):(g=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||d(),f(b))},UTCDate:function(a,b,c,d,e,f,g,h){"object"==typeof b&&b instanceof Date&&(h=b.getMilliseconds(),g=b.getSeconds(),f=b.getMinutes(),e=b.getHours(),d=b.getDate(),c=b.getMonth(),b=b.getFullYear());var i=new Date;return i.setUTCFullYear(b),i.setUTCDate(1),i.setUTCMonth(c||0),i.setUTCDate(d||1),i.setUTCHours(e||0),i.setUTCMinutes((f||0)-(Math.abs(a)<30?60*a:a)),i.setUTCSeconds(g||0),i.setUTCMilliseconds(h||0),i},periodsToSeconds:function(a){return 31557600*a[0]+2629800*a[1]+604800*a[2]+86400*a[3]+3600*a[4]+60*a[5]+a[6]},resync:function(){var b=this;a("."+this._getMarker()).each(function(){var c=a.data(this,b.name);if(c.options.serverSync){for(var d=null,e=0;e<b._serverSyncs.length;e++)if(b._serverSyncs[e][0]===c.options.serverSync){d=b._serverSyncs[e];break}if(b._eqNull(d[2])){var f=a.isFunction(c.options.serverSync)?c.options.serverSync.apply(this,[]):null;d[2]=(f?(new Date).getTime()-f.getTime():0)-d[1]}c._since&&c._since.setMilliseconds(c._since.getMilliseconds()+d[2]),c._until.setMilliseconds(c._until.getMilliseconds()+d[2])}});for(var c=0;c<b._serverSyncs.length;c++)b._eqNull(b._serverSyncs[c][2])||(b._serverSyncs[c][1]+=b._serverSyncs[c][2],delete b._serverSyncs[c][2])},_instSettings:function(a,b){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(a){this._hasElem(a)||this._timerElems.push(a)},_hasElem:function(b){return a.inArray(b,this._timerElems)>-1},_removeElem:function(b){this._timerElems=a.map(this._timerElems,function(a){return a===b?null:a})},_updateElems:function(){for(var a=this._timerElems.length-1;a>=0;a--)this._updateCountdown(this._timerElems[a])},_optionsChanged:function(b,c,d){d.layout&&(d.layout=d.layout.replace(/&lt;/g,"<").replace(/&gt;/g,">")),this._resetExtraLabels(c.options,d);var e=c.options.timezone!==d.timezone;a.extend(c.options,d),this._adjustSettings(b,c,!this._eqNull(d.until)||!this._eqNull(d.since)||e);var f=new Date;(c._since&&c._since<f||c._until&&c._until>f)&&this._addElem(b[0]),this._updateCountdown(b,c)},_updateCountdown:function(b,c){if(b=b.jquery?b:a(b),c=c||this._getInst(b)){if(b.html(this._generateHTML(c)).toggleClass(this._rtlClass,c.options.isRTL),"pause"!==c._hold&&a.isFunction(c.options.onTick)){var d="lap"!==c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date);1!==c.options.tickInterval&&this.periodsToSeconds(d)%c.options.tickInterval!==0||c.options.onTick.apply(b[0],[d])}var e="pause"!==c._hold&&(c._since?c._now.getTime()<c._since.getTime():c._now.getTime()>=c._until.getTime());if(e&&!c._expiring){if(c._expiring=!0,this._hasElem(b[0])||c.options.alwaysExpire){if(this._removeElem(b[0]),a.isFunction(c.options.onExpiry)&&c.options.onExpiry.apply(b[0],[]),c.options.expiryText){var f=c.options.layout;c.options.layout=c.options.expiryText,this._updateCountdown(b[0],c),c.options.layout=f}c.options.expiryUrl&&(window.location=c.options.expiryUrl)}c._expiring=!1}else"pause"===c._hold&&this._removeElem(b[0])}},_resetExtraLabels:function(a,b){var c=null;for(c in b)c.match(/[Ll]abels[02-9]|compactLabels1/)&&(a[c]=b[c]);for(c in a)c.match(/[Ll]abels[02-9]|compactLabels1/)&&"undefined"==typeof b[c]&&(a[c]=null)},_eqNull:function(a){return"undefined"==typeof a||null===a},_adjustSettings:function(b,c,d){for(var e=null,f=0;f<this._serverSyncs.length;f++)if(this._serverSyncs[f][0]===c.options.serverSync){e=this._serverSyncs[f][1];break}var g=null,h=null;if(this._eqNull(e)){var i=a.isFunction(c.options.serverSync)?c.options.serverSync.apply(b[0],[]):null;g=new Date,h=i?g.getTime()-i.getTime():0,this._serverSyncs.push([c.options.serverSync,h])}else g=new Date,h=c.options.serverSync?e:0;var j=c.options.timezone;j=this._eqNull(j)?-g.getTimezoneOffset():j,(d||!d&&this._eqNull(c._until)&&this._eqNull(c._since))&&(c._since=c.options.since,this._eqNull(c._since)||(c._since=this.UTCDate(j,this._determineTime(c._since,null)),c._since&&h&&c._since.setMilliseconds(c._since.getMilliseconds()+h)),c._until=this.UTCDate(j,this._determineTime(c.options.until,g)),h&&c._until.setMilliseconds(c._until.getMilliseconds()+h)),c._show=this._determineShow(c)},_preDestroy:function(a,b){this._removeElem(a[0]),a.empty()},pause:function(a){this._hold(a,"pause")},lap:function(a){this._hold(a,"lap")},resume:function(a){this._hold(a,null)},toggle:function(b){var c=a.data(b,this.name)||{};this[c._hold?"resume":"pause"](b)},toggleLap:function(b){var c=a.data(b,this.name)||{};this[c._hold?"resume":"lap"](b)},_hold:function(b,c){var d=a.data(b,this.name);if(d){if("pause"===d._hold&&!c){d._periods=d._savePeriods;var e=d._since?"-":"+";d[d._since?"_since":"_until"]=this._determineTime(e+d._periods[0]+"y"+e+d._periods[1]+"o"+e+d._periods[2]+"w"+e+d._periods[3]+"d"+e+d._periods[4]+"h"+e+d._periods[5]+"m"+e+d._periods[6]+"s"),this._addElem(b)}d._hold=c,d._savePeriods="pause"===c?d._periods:null,a.data(b,this.name,d),this._updateCountdown(b,d)}},getTimes:function(b){var c=a.data(b,this.name);return c?"pause"===c._hold?c._savePeriods:c._hold?this._calculatePeriods(c,c._show,c.options.significant,new Date):c._periods:null},_determineTime:function(a,b){var c=this,d=function(a){var b=new Date;return b.setTime(b.getTime()+1e3*a),b},e=function(a){a=a.toLowerCase();for(var b=new Date,d=b.getFullYear(),e=b.getMonth(),f=b.getDate(),g=b.getHours(),h=b.getMinutes(),i=b.getSeconds(),j=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,k=j.exec(a);k;){switch(k[2]||"s"){case"s":i+=parseInt(k[1],10);break;case"m":h+=parseInt(k[1],10);break;case"h":g+=parseInt(k[1],10);break;case"d":f+=parseInt(k[1],10);break;case"w":f+=7*parseInt(k[1],10);break;case"o":e+=parseInt(k[1],10),f=Math.min(f,c._getDaysInMonth(d,e));break;case"y":d+=parseInt(k[1],10),f=Math.min(f,c._getDaysInMonth(d,e))}k=j.exec(a)}return new Date(d,e,f,g,h,i,0)},f=this._eqNull(a)?b:"string"==typeof a?e(a):"number"==typeof a?d(a):a;return f&&f.setMilliseconds(0),f},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(b){var j=this;b._periods=b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date);var k=!1,l=0,m=b.options.significant,n=a.extend({},b._show),o=null;for(o=c;o<=i;o++)k=k||"?"===b._show[o]&&b._periods[o]>0,n[o]="?"!==b._show[o]||k?b._show[o]:null,l+=n[o]?1:0,m-=b._periods[o]>0?1:0;var p=[!1,!1,!1,!1,!1,!1,!1];for(o=i;o>=c;o--)b._show[o]&&(b._periods[o]?p[o]=!0:(p[o]=m>0,m--));var q=b.options.compact?b.options.compactLabels:b.options.labels,r=b.options.whichLabels||this._normalLabels,s=function(a){var c=b.options["compactLabels"+r(b._periods[a])];return n[a]?j._translateDigits(b,b._periods[a])+(c?c[a]:q[a])+" ":""},t=b.options.padZeroes?2:1,u=function(a){var c=b.options["labels"+r(b._periods[a])];return!b.options.significant&&n[a]||b.options.significant&&p[a]?'<span class="'+j._sectionClass+'"><span class="'+j._amountClass+'">'+j._minDigits(b,b._periods[a],t)+'</span><span class="'+j._periodClass+'">'+(c?c[a]:q[a])+"</span></span>":""};return b.options.layout?this._buildLayout(b,n,b.options.layout,b.options.compact,b.options.significant,p):(b.options.compact?'<span class="'+this._rowClass+" "+this._amountClass+(b._hold?" "+this._holdingClass:"")+'">'+s(c)+s(d)+s(e)+s(f)+(n[g]?this._minDigits(b,b._periods[g],2):"")+(n[h]?(n[g]?b.options.timeSeparator:"")+this._minDigits(b,b._periods[h],2):"")+(n[i]?(n[g]||n[h]?b.options.timeSeparator:"")+this._minDigits(b,b._periods[i],2):""):'<span class="'+this._rowClass+" "+this._showClass+(b.options.significant||l)+(b._hold?" "+this._holdingClass:"")+'">'+u(c)+u(d)+u(e)+u(f)+u(g)+u(h)+u(i))+"</span>"+(b.options.description?'<span class="'+this._rowClass+" "+this._descrClass+'">'+b.options.description+"</span>":"")},_buildLayout:function(b,j,k,l,m,n){for(var o=b.options[l?"compactLabels":"labels"],p=b.options.whichLabels||this._normalLabels,q=function(a){return(b.options[(l?"compactLabels":"labels")+p(b._periods[a])]||o)[a]},r=function(a,c){return b.options.digits[Math.floor(a/c)%10]},s={desc:b.options.description,sep:b.options.timeSeparator,yl:q(c),yn:this._minDigits(b,b._periods[c],1),ynn:this._minDigits(b,b._periods[c],2),ynnn:this._minDigits(b,b._periods[c],3),y1:r(b._periods[c],1),y10:r(b._periods[c],10),y100:r(b._periods[c],100),y1000:r(b._periods[c],1e3),ol:q(d),on:this._minDigits(b,b._periods[d],1),onn:this._minDigits(b,b._periods[d],2),onnn:this._minDigits(b,b._periods[d],3),o1:r(b._periods[d],1),o10:r(b._periods[d],10),o100:r(b._periods[d],100),o1000:r(b._periods[d],1e3),wl:q(e),wn:this._minDigits(b,b._periods[e],1),wnn:this._minDigits(b,b._periods[e],2),wnnn:this._minDigits(b,b._periods[e],3),w1:r(b._periods[e],1),w10:r(b._periods[e],10),w100:r(b._periods[e],100),w1000:r(b._periods[e],1e3),dl:q(f),dn:this._minDigits(b,b._periods[f],1),dnn:this._minDigits(b,b._periods[f],2),dnnn:this._minDigits(b,b._periods[f],3),d1:r(b._periods[f],1),d10:r(b._periods[f],10),d100:r(b._periods[f],100),d1000:r(b._periods[f],1e3),hl:q(g),hn:this._minDigits(b,b._periods[g],1),hnn:this._minDigits(b,b._periods[g],2),hnnn:this._minDigits(b,b._periods[g],3),h1:r(b._periods[g],1),h10:r(b._periods[g],10),h100:r(b._periods[g],100),h1000:r(b._periods[g],1e3),ml:q(h),mn:this._minDigits(b,b._periods[h],1),mnn:this._minDigits(b,b._periods[h],2),mnnn:this._minDigits(b,b._periods[h],3),m1:r(b._periods[h],1),m10:r(b._periods[h],10),m100:r(b._periods[h],100),m1000:r(b._periods[h],1e3),sl:q(i),sn:this._minDigits(b,b._periods[i],1),snn:this._minDigits(b,b._periods[i],2),snnn:this._minDigits(b,b._periods[i],3),s1:r(b._periods[i],1),s10:r(b._periods[i],10),s100:r(b._periods[i],100),s1000:r(b._periods[i],1e3)},t=k,u=c;u<=i;u++){var v="yowdhms".charAt(u),w=new RegExp("\\{"+v+"<\\}([\\s\\S]*)\\{"+v+">\\}","g");t=t.replace(w,!m&&j[u]||m&&n[u]?"$1":"")}return a.each(s,function(a,b){var c=new RegExp("\\{"+a+"\\}","g");t=t.replace(c,b)}),t},_minDigits:function(a,b,c){return b=""+b,b.length>=c?this._translateDigits(a,b):(b="0000000000"+b,this._translateDigits(a,b.substr(b.length-c)))},_translateDigits:function(a,b){return(""+b).replace(/[0-9]/g,function(b){return a.options.digits[b]})},_determineShow:function(a){var b=a.options.format,j=[];return j[c]=b.match("y")?"?":b.match("Y")?"!":null,j[d]=b.match("o")?"?":b.match("O")?"!":null,j[e]=b.match("w")?"?":b.match("W")?"!":null,j[f]=b.match("d")?"?":b.match("D")?"!":null,j[g]=b.match("h")?"?":b.match("H")?"!":null,j[h]=b.match("m")?"?":b.match("M")?"!":null,j[i]=b.match("s")?"?":b.match("S")?"!":null,j},_calculatePeriods:function(a,b,j,k){a._now=k,a._now.setMilliseconds(0);var l=new Date(a._now.getTime());a._since?k.getTime()<a._since.getTime()?a._now=k=l:k=a._since:(l.setTime(a._until.getTime()),k.getTime()>a._until.getTime()&&(a._now=k=l));var m=[0,0,0,0,0,0,0];if(b[c]||b[d]){var n=this._getDaysInMonth(k.getFullYear(),k.getMonth()),o=this._getDaysInMonth(l.getFullYear(),l.getMonth()),p=l.getDate()===k.getDate()||l.getDate()>=Math.min(n,o)&&k.getDate()>=Math.min(n,o),q=function(a){return 60*(60*a.getHours()+a.getMinutes())+a.getSeconds()},r=Math.max(0,12*(l.getFullYear()-k.getFullYear())+l.getMonth()-k.getMonth()+(l.getDate()<k.getDate()&&!p||p&&q(l)<q(k)?-1:0));m[c]=b[c]?Math.floor(r/12):0,m[d]=b[d]?r-12*m[c]:0,k=new Date(k.getTime());var s=k.getDate()===n,t=this._getDaysInMonth(k.getFullYear()+m[c],k.getMonth()+m[d]);k.getDate()>t&&k.setDate(t),k.setFullYear(k.getFullYear()+m[c]),k.setMonth(k.getMonth()+m[d]),s&&k.setDate(t)}var u=Math.floor((l.getTime()-k.getTime())/1e3),v=null,w=function(a,c){m[a]=b[a]?Math.floor(u/c):0,u-=m[a]*c};if(w(e,604800),w(f,86400),w(g,3600),w(h,60),w(i,1),u>0&&!a._since){var x=[1,12,4.3482,7,24,60,60],y=i,z=1;for(v=i;v>=c;v--)b[v]&&(m[y]>=z&&(m[y]=0,u=1),u>0&&(m[v]++,u=0,y=v,z=1)),z*=x[v]}if(j)for(v=c;v<=i;v++)j&&m[v]?j--:j||(m[v]=0);return m}})}(jQuery);

window.SEMICOLON_countdownInit = function( $countdownEl ){

	$countdownEl = $countdownEl.filter(':not(.customjs)');

	if( $countdownEl.length < 1 ){
		return true;
	}

	$countdownEl.each(function(){

		let element		= $(this),
			elFormat	= element.attr( 'data-format' ) || 'dHMS',
			elSince		= element.attr( 'data-since' ),
			elYear		= element.attr( 'data-year' ),
			elMonth		= element.attr( 'data-month' ),
			elDay		= element.attr( 'data-day' ),
			elHour		= element.attr( 'data-hour' ),
			elMin		= element.attr( 'data-minute' ),
			elSec		= element.attr( 'data-second' ),
			elRedirect	= element.attr( 'data-redirect' ),
			dateFormat	= '';

		if( elYear ){
			dateFormat = elYear;
		}

		if( elMonth && elMonth < 13 ){
			dateFormat = dateFormat +"-"+ ( elMonth < 10 ? '0'+elMonth : elMonth);
		} else {
			if( elYear ) {
				dateFormat = dateFormat +"-01";
			}
		}

		if( elDay && elDay < 32 ){
			dateFormat = dateFormat +"-"+ ( elDay < 10 ? '0'+elDay : elDay);
		} else {
			if( elYear ) {
				dateFormat = dateFormat +"-01";
			}
		}

		setDate = dateFormat != '' ? new Date( moment( dateFormat ) ) : new Date();

		if( elHour && elHour < 25 ){
			setDate.setHours( setDate.getHours() + Number( elHour ) );
		}

		if( elMin && elMin < 60 ){
			setDate.setMinutes( setDate.getMinutes() + Number( elMin ) );
		}

		if( elSec && elSec < 60 ){
			setDate.setSeconds( setDate.getSeconds() + Number( elSec ) );
		}

		if( !elRedirect ) {
			elRedirect = false;
		}

		if( elSince == 'true' ) {
			element.countdown({
				since: setDate,
				format: elFormat,
				expiryUrl: elRedirect,
			});
		} else {
			element.countdown({
				until: setDate,
				format: elFormat,
				expiryUrl: elRedirect,
			});
		}

	});

};



/* https://github.com/mhuggins/jquery-countTo
   CountTo */

window.SEMICOLON_counterInit = function( $counterEl ){

	$counterEl = $counterEl.filter(':not(.customjs)');

	if( $counterEl.length < 1 ){
		return true;
	}

	$counterEl.each(function(){
		let element		= $(this),
			elComma		= element.find('span').attr('data-comma'),
			elSep		= element.find('span').attr('data-sep') || ',',
			elPlaces	= element.find('span').attr('data-places') || 3;

		let elCommaObj	= {
			comma : elComma,
			sep : elSep,
			places : Number( elPlaces )
		}

		if( element.not('.counter-instant') && ( $('body').hasClass('device-xl') || $('body').hasClass('device-lg') ) ){
			let observer = new IntersectionObserver( function(entries, observer) {
				entries.forEach( function(entry) {
					if (entry.isIntersecting) {
						SEMICOLON_runCounterInit( element, elCommaObj );
						observer.unobserve( entry.target );
					}
				});
			}, {rootMargin: '-50px'});
			observer.observe( element[0] );
		} else {
			SEMICOLON_runCounterInit( element, elCommaObj );
		}
	});
};

window.SEMICOLON_runCounterInit = function( elCounter, elFormat ){
	if( elFormat.comma == 'true' ) {

		let reFormat	= '\\B(?=(\\d{'+ elFormat.places +'})+(?!\\d))',
			regExp		= new RegExp( reFormat, "g" );

		elCounter.find('span').countTo({
			formatter: function (value, options) {
				value = value.toFixed( options.decimals );
				value = value.replace( regExp, elFormat.sep );
				return value;
			}
		});
	} else {
		elCounter.find('span').countTo();
	}
};



window.scwDataClassesPlugin = window.scwDataClassesPlugin || {};

window.SEMICOLON_dataClassesInit = function( $dataClassesEl ){

	if( $dataClassesEl.length < 1 ){
		return true;
	}

	let $dataClassXs 	= $('[data-class-xs]'),
		$dataClassSm 	= $('[data-class-sm]'),
		$dataClassMd 	= $('[data-class-md]'),
		$dataClassLg 	= $('[data-class-lg]'),
		$dataClassXl 	= $('[data-class-xl]'),
		$body			= $('body');

	if( $dataClassXs.length > 0 ) {
		$dataClassXs.each( function(){
			let element = $(this),
				elementClass = element.attr('data-class-xs'),
				elementClassDelete = element.attr('data-class-sm') + ' ' + element.attr('data-class-md') + ' ' + element.attr('data-class-lg') + ' ' + element.attr('data-class-xl');

			if( $body.hasClass('device-xs') ) {
				element.removeClass( elementClassDelete );
				element.addClass( elementClass );
			}
		});
	}

	if( $dataClassSm.length > 0 ) {
		$dataClassSm.each( function(){
			let element = $(this),
				elementClass = element.attr('data-class-sm'),
				elementClassDelete = element.attr('data-class-xs') + ' ' + element.attr('data-class-md') + ' ' + element.attr('data-class-lg') + ' ' + element.attr('data-class-xl');

			if( $body.hasClass('device-sm') ) {
				element.removeClass( elementClassDelete );
				element.addClass( elementClass );
			}
		});
	}

	if( $dataClassMd.length > 0 ) {
		$dataClassMd.each( function(){
			let element = $(this),
				elementClass = element.attr('data-class-md'),
				elementClassDelete = element.attr('data-class-xs') + ' ' + element.attr('data-class-sm') + ' ' + element.attr('data-class-lg') + ' ' + element.attr('data-class-xl');

			if( $body.hasClass('device-md') ) {
				element.removeClass( elementClassDelete );
				element.addClass( elementClass );
			}
		});
	}

	if( $dataClassLg.length > 0 ) {
		$dataClassLg.each( function(){
			let element = $(this),
				elementClass = element.attr('data-class-lg'),
				elementClassDelete = element.attr('data-class-xs') + ' ' + element.attr('data-class-sm') + ' ' + element.attr('data-class-md') + ' ' + element.attr('data-class-xl');

			if( $body.hasClass('device-lg') ) {
				element.removeClass( elementClassDelete );
				element.addClass( elementClass );
			}
		});
	}

	if( $dataClassXl.length > 0 ) {
		$dataClassXl.each( function(){
			let element = $(this),
				elementClass = element.attr('data-class-xl'),
				elementClassDelete = element.attr('data-class-xs') + ' ' + element.attr('data-class-sm') + ' ' + element.attr('data-class-md') + ' ' + element.attr('data-class-lg');

			if( $body.hasClass('device-xl') ) {
				element.removeClass( elementClassDelete );
				element.addClass( elementClass );
			}
		});
	}

};



window.scwDataHeightsPlugin = window.scwDataHeightsPlugin || {};

window.SEMICOLON_dataHeightsInit = function( $dataHeightsEl ){

	if( $dataHeightsEl.length < 1 ){
		return true;
	}

	let $dataHeightXs	= $('[data-height-xs]'),
		$dataHeightSm	= $('[data-height-sm]'),
		$dataHeightMd	= $('[data-height-md]'),
		$dataHeightLg	= $('[data-height-lg]'),
		$dataHeightXl	= $('[data-height-xl]'),
		$body			= $('body');

	if( $dataHeightXs.length > 0 ) {
		$dataHeightXs.each( function(){
			let element = $(this),
				elementHeight = element.attr('data-height-xs');

			if( $body.hasClass('device-xs') ) {
				if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
			}
		});
	}

	if( $dataHeightSm.length > 0 ) {
		$dataHeightSm.each( function(){
			let element = $(this),
				elementHeight = element.attr('data-height-sm');

			if( $body.hasClass('device-sm') ) {
				if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
			}
		});
	}

	if( $dataHeightMd.length > 0 ) {
		$dataHeightMd.each( function(){
			let element = $(this),
				elementHeight = element.attr('data-height-md');

			if( $body.hasClass('device-md') ) {
				if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
			}
		});
	}

	if( $dataHeightLg.length > 0 ) {
		$dataHeightLg.each( function(){
			let element = $(this),
				elementHeight = element.attr('data-height-lg');

			if( $body.hasClass('device-lg') ) {
				if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
			}
		});
	}

	if( $dataHeightXl.length > 0 ) {
		$dataHeightXl.each( function(){
			let element = $(this),
				elementHeight = element.attr('data-height-xl');

			if( $body.hasClass('device-xl') ) {
				if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
			}
		});
	}

};



/**
 * @preserve
 * Jribbble v2.0.4 | Thu Jun 4 01:49:29 2015 -0400
 * Copyright (c) 2015, Tyler Gaw me@tylergaw.com
 * Released under the ISC-LICENSE
 */
!function(e,t,r,s){"use strict";e.jribbble={};var n=null,o="https://api.dribbble.com/v1",i=["animated","attachments","debuts","playoffs","rebounds","teams"],u={token:"Jribbble: Missing Dribbble access token. Set one with $.jribbble.accessToken = YOUR_ACCESS_TOKEN. If you do not have an access token, you must register a new application at https://dribbble.com/account/applications/new",singular:function(e){return e.substr(0,e.length-1)},idRequired:function(e){return"Jribbble: You have to provide a "+this.singular(e)+' ID. ex: $.jribbble.%@("1234").'.replace(/%@/g,e)},subResource:function(e){return"Jribbble: You have to provide a "+this.singular(e)+' ID to get %@. ex: $.jribbble.%@("1234").%@()'.replace(/%@/g,e)},shotId:function(e){return"Jribbble: You have to provide a shot ID to get %@. ex: "+' $.jribbble.shots("1234").%@()'.replace(/%@/g,e)},commentLikes:'Jribbble: You have to provide a comment ID to get likes. ex:  $.jribbble.shots("1234").comments("456").likes()'},c=function(e,t){if(e&&"object"!=typeof e)return e;throw new Error(u.idRequired(t))},l=function(e){var t={};return e.forEach(function(e){t[e]=d.call(this,e)}.bind(this)),t},h=function(t){var r=e.param(t);return r?"?"+r:""},a=function(e){if(0!==e.length){var t=e[0],r=typeof t,s={};if("number"===r||"string"===r){var n=i.indexOf(t);n>-1?s.list=t:s.resource=t}else"object"===r&&(s=t);return s}},b=function(){var t=e.extend({},e.Deferred()),r=function(){return this.methods=[],this.response=null,this.flushed=!1,this.add=function(e){this.flushed?e(this.scope):this.methods.push(e)},this.flush=function(e){if(!this.flushed){for(this.scope=e,this.flushed=!0;this.methods[0];)this.methods.shift()(e);return e}},this};return t.queue=new r,t.url=o,t.get=function(){return n?(e.ajax({type:"GET",url:this.url,beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+n)},success:function(e){this.resolve(e)}.bind(this),error:function(e){this.reject(e)}.bind(this)}),this):(console.error(u.token),!1)},t},f=function(t){return function(r){return e.extend(this,b()),this.queue.add(function(e){e.url+="/"+t+"/"+r}),setTimeout(function(){this.queue.flush(this).get()}.bind(this)),this}},d=function(e){return function(t){return this.queue.add(function(r){r.url+="/"+e+"/"+h(t||{})}),this}};e.jribbble.shots=function(t,r){var s=a([].slice.call(arguments))||{},n=r||{},o=function(t){return function(r,s){var n=a([].slice.call(arguments))||{},o=s||{};return this.queue.add(function(r){if(!r.shotId)throw new Error(u.shotId(t));r.url+="/"+t+"/",n.resource&&(r.url+=n.resource,delete n.resource),r.url+=h(e.extend(n,o))}),this}},i=function(){return e.extend(this,b()),this.url+="/shots/",this.queue.add(function(t){s.resource&&(t.shotId=s.resource,t.url+=s.resource,delete s.resource),t.url+=h(e.extend(s,n))}),setTimeout(function(){this.queue.flush(this).get()}.bind(this)),this};return i.prototype.attachments=o("attachments"),i.prototype.buckets=o("buckets"),i.prototype.likes=o("likes"),i.prototype.projects=o("projects"),i.prototype.rebounds=o("rebounds"),i.prototype.comments=function(t,r){var s=a([].slice.call(arguments))||{},n=r||{};return this.queue.add(function(t){if(!t.shotId)throw new Error(u.shotId("comments"));t.url+="/comments/",s.resource&&(t.commentId=s.resource,t.url+=s.resource+"/",delete s.resource),t.url+=h(e.extend(s,n))}),this.likes=function(e){var t=e||{};return this.queue.add(function(e){if(!e.commentId)throw new Error(u.commentLikes);e.url+="likes/"+h(t)}),this},this},new i},e.jribbble.teams=function(e){var t="teams",r=c(e,t),s=f.call(this,t);return s.prototype=l.call(this,["members","shots"]),new s(r)},e.jribbble.users=function(e){var t="users",r=c(e,t),s=f.call(this,t);return s.prototype=l.call(this,["buckets","followers","following","likes","projects","shots","teams"]),s.prototype.isFollowing=function(e){return this.queue.add(function(t){t.url+="/following/"+e}),this},new s(r)},e.jribbble.buckets=function(e){var t="buckets",r=c(e,t),s=f.call(this,t);return s.prototype=l.call(this,["shots"]),new s(r)},e.jribbble.projects=function(e){var t="projects",r=c(e,t),s=f.call(this,t);return s.prototype=l.call(this,["shots"]),new s(r)},e.jribbble.setToken=function(e){return n=e,this}}(jQuery,window,document);

window.SEMICOLON_dribbbleShotsInit = function( $dribbbleShotsEl ){

	$dribbbleShotsEl = $dribbbleShotsEl.filter(':not(.customjs)');

	if( $dribbbleShotsEl.length < 1 ){
		return true;
	}

	$.jribbble.setToken( '012d3d72d12f93e1d41a19195d7da2fc87e6b5afa48a184256e398eb793cfe56' );

	$dribbbleShotsEl.each(function() {
		let element		= $(this),
			elUsername	= element.attr('data-user'),
			elCount		= element.attr('data-count') || 9,
			elList		= element.attr('data-list'),
			elType		= element.attr('data-type');

		element.addClass('customjs');

		if( elType == 'user' ) {

			$.jribbble.users( elUsername ).shots({
				'sort': 'recent',
				'page': 1,
				'per_page': Number(elCount)
			}).then( function(res) {
				let html = [];
				res.forEach( function(shot) {
					html.push('<a class="grid-item" href="' + shot.html_url + '" target="_blank">');
					html.push('<img src="' + shot.images.teaser + '" ');
					html.push('alt="' + shot.title + '"></a>');
				});
				element.html(html.join(''));

				$(window).on( 'pluginImagesLoadedReady', function(){
					element.imagesLoaded().done( function() {
						element.removeClass('customjs');
						SEMICOLON.widget.masonryThumbs();
					});
				});
			});

		} else if( elType == 'list' ) {

			$.jribbble.shots( elList, {
				'sort': 'recent',
				'page': 1,
				'per_page': Number(elCount)
			}).then( function(res) {
				let html = [];
				res.forEach( function(shot) {
					html.push('<a class="grid-item" href="' + shot.html_url + '" target="_blank">');
					html.push('<img src="' + shot.images.teaser + '" ');
					html.push('alt="' + shot.title + '"></a>');
				});
				element.html(html.join(''));

				$(window).on( 'pluginImagesLoadedReady', function(){
					element.imagesLoaded().done( function() {
						element.removeClass('customjs');
						SEMICOLON.widget.masonryThumbs();
					});
				});
			});
		}

	});

};



/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

window.SEMICOLON_resizeVideosInit = function( $videoEl ){

	$videoEl = $videoEl.filter(':not(.customjs)');

	if( $videoEl.length < 1 ){
		return true;
	}

	$videoEl.parent().fitVids({
		customSelector: 'iframe[src*="youtube"],iframe[src*="vimeo"],iframe[src*="dailymotion"],iframe[src*="maps.google.com"],iframe[src*="google.com/maps"]',
		ignore: '.no-fv'
	});

};



/*
 * jQuery FlexSlider v2.7.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */

window.SEMICOLON_flexSliderInit = function( $flexSliderEl ){

	$flexSliderEl = $flexSliderEl.filter(':not(.customjs)');

	if( $flexSliderEl.length < 1 ){
		return true;
	}

	$flexSliderEl.each(function() {
		let element			= $(this),
			elLazy			= element.find('.lazy'),
			elAnimation		= element.attr('data-animation') || 'slide',
			elEasing		= element.attr('data-easing') || 'swing',
			elDirection		= element.attr('data-direction') || 'horizontal',
			elReverse		= element.attr('data-reverse'),
			elSlideshow		= element.attr('data-slideshow'),
			elPause			= element.attr('data-pause') || 5000,
			elSpeed			= element.attr('data-speed') || 600,
			elVideo			= element.attr('data-video'),
			elPagi			= element.attr('data-pagi'),
			elArrows		= element.attr('data-arrows'),
			elArrowLeft		= element.attr('data-arrow-left') || 'icon-angle-left',
			elArrowRight	= element.attr('data-arrow-right') || 'icon-angle-right',
			elThumbs		= element.attr('data-thumbs'),
			elHover			= element.attr('data-hover'),
			elSheight		= element.attr('data-smooth-height'),
			elTouch			= element.attr('data-touch'),
			elUseCSS		= false;

		if( elEasing == 'swing' ) {
			elEasing = 'swing';
			elUseCSS = true;
		}
		if( elReverse == 'true' ) { elReverse = true; } else { elReverse = false; }
		if( !elSlideshow ) { elSlideshow = true; } else { elSlideshow = false; }
		if( !elVideo ) { elVideo = false; }
		if( elSheight == 'false' ) { elSheight = false; } else { elSheight = true; }
		if( elDirection == 'vertical' ) { elSheight = false; }
		if( elPagi == 'false' ) { elPagi = false; } else { elPagi = true; }
		if( elThumbs == 'true' ) { elPagi = 'thumbnails'; } else { elPagi = elPagi; }
		if( elArrows == 'false' ) { elArrows = false; } else { elArrows = true; }
		if( elHover == 'false' ) { elHover = false; } else { elHover = true; }
		if( elTouch == 'false' ) { elTouch = false; } else { elTouch = true; }

		element.find('.flexslider').flexslider({
			selector: ".slider-wrap > .slide",
			animation: elAnimation,
			easing: elEasing,
			direction: elDirection,
			reverse: elReverse,
			slideshow: elSlideshow,
			slideshowSpeed: Number(elPause),
			animationSpeed: Number(elSpeed),
			pauseOnHover: elHover,
			video: elVideo,
			controlNav: elPagi,
			directionNav: elArrows,
			smoothHeight: elSheight,
			useCSS: elUseCSS,
			touch: elTouch,
			start: function( slider ){
				SEMICOLON.widget.animations();
				SEMICOLON.initialize.lightbox({ 'parent': element });
				$('.flex-prev').html('<i class="'+ elArrowLeft +'"></i>');
				$('.flex-next').html('<i class="'+ elArrowRight +'"></i>');
				setTimeout( function(){
					if( slider.parents( '.grid-container.has-init-isotope' ).length > 0 ) {
						slider.parents( '.grid-container.has-init-isotope' ).isotope('layout');
					}
				}, 1200 );
			},
			after: function( slider ){
				if( slider.parents( '.grid-container.has-init-isotope' ).length > 0 ) {
					slider.parents( '.grid-container.has-init-isotope' ).isotope('layout');
				}
				$('.menu-item:visible').find( '.flexslider .slide' ).resize();
			}
		});

		$(window).on( 'lazyLoadLoaded', function(){
			if( elLazy.length == element.find('.lazy.lazy-loaded').length ) {
				lazyLoadInstance.update();
				setTimeout( function(){
					element.find('.flexslider').resize();
				}, 500 );
			}
		});

	});

};



/*!
 * Original copyright:
 *
 * Copyright (C) 2009 Joel Sutherland
 * Licenced under the MIT license
 * http://www.newmediacampaigns.com/page/jquery-flickr-plugin
 *
 * Available tags for templates:
 * title, link, date_taken, description, published, author, author_id, tags, image*
 */

window.SEMICOLON_flickrFeedInit = function( $flickrFeedEl ){

	$flickrFeedEl = $flickrFeedEl.filter(':not(.customjs)');

	if( $flickrFeedEl.length < 1 ){
		return true;
	}

	$flickrFeedEl.each(function() {
		let element		= $(this),
			elID		= element.attr('data-id'),
			elCount		= element.attr('data-count') || 9,
			elType		= element.attr('data-type'),
			elTypeGet	= 'photos_public.gne';

		if( elType == 'group' ) { elTypeGet = 'groups_pool.gne'; }

		element.jflickrfeed({
			feedapi: elTypeGet,
			limit: Number(elCount),
			qstrings: {
				id: elID
			},
			itemTemplate: '<a class="grid-item" href="{{image_b}}" title="{{title}}" data-lightbox="gallery-item">' +
								'<img src="{{image_s}}" alt="{{title}}" />' +
						  '</a>'
		}, function(data) {
			SEMICOLON.initialize.lightbox({ 'parent': element });
		});
	});

};



/**
 * jQuery gMap - Google Maps API V3
 *
 * @license MIT License; https://www.opensource.org/licenses/mit-license.php
 * @url   https://github.com/marioestrada/jQuery-gMap
 * @author  Mario Estrada <me@mario.ec> based on original plugin by Cedric Kastner <cedric@nur-text.de>
 * @version 2.2
 */
/* global google */

window.SEMICOLON_gmapInit = function( $gmapEl ){

	$gmapEl = $gmapEl.filter(':not(.customjs)');

	if( $gmapEl.length < 1 ){
		return true;
	}

	$gmapEl.each( function(){

		let element			= $(this),
			elLat			= element.attr( 'data-latitude' ),
			elLon			= element.attr( 'data-longitude' ),
			elAdd			= element.attr( 'data-address' ),
			elCon			= element.attr( 'data-content' ),
			elScroll		= element.attr( 'data-scrollwheel' ) || true,
			elType			= element.attr( 'data-maptype' ) || 'ROADMAP',
			elZoom			= element.attr( 'data-zoom' ) || 12,
			elStyles		= element.attr( 'data-styles' ),
			elMarkers		= element.attr( 'data-markers' ),
			elIcon			= element.attr( 'data-icon' ),
			elConPan		= element.attr( 'data-control-pan' ) || false,
			elConZoom		= element.attr( 'data-control-zoom' )|| false,
			elConMapT		= element.attr( 'data-control-maptype' )|| false,
			elConScale		= element.attr( 'data-control-scale' )|| false,
			elConStreetV	= element.attr( 'data-control-streetview' )|| false,
			elConOverview	= element.attr( 'data-control-overview' )|| false;

		if( elAdd ) {
			elLat = elLon = false;
		} else {
			if( !elLat && !elLon ) {
				console.log( 'Google Map co-ordinates not entered.' );
				return true;
			}
		}

		if( elStyles ) { elStyles = JSON.parse( elStyles ); }
		if( elScroll == 'false' ) { elScroll = false; }
		if( elConPan == 'true' ) { elConPan = true; }
		if( elConZoom == 'true' ) { elConZoom = true; }
		if( elConMapT == 'true' ) { elConMapT = true; }
		if( elConScale == 'true' ) { elConScale = true; }
		if( elConStreetV == 'true' ) { elConStreetV = true; }
		if( elConOverview == 'true' ) { elConOverview = true; }

		if( elMarkers ) {
			elMarkers = Function( 'return ' + elMarkers )();
		} else {
			if( elAdd ) {
				elMarkers = [
					{
						address: elAdd,
						html: elCon ? elCon : elAdd
					}
				]
			} else {
				elMarkers = [
					{
						latitude: elLat,
						longitude: elLon,
						html: elCon ? elCon : false
					}
				]
			}
		}

		if( elIcon ) {
			elIcon = Function( 'return ' + elIcon )();
		} else {
			elIcon = {
				image: "https://www.google.com/mapfiles/marker.png",
				shadow: "https://www.google.com/mapfiles/shadow50.png",
				iconsize: [20, 34],
				shadowsize: [37, 34],
				iconanchor: [9, 34],
				shadowanchor: [19, 34]
			};
		}

		element.gMap({
			controls: {
				panControl: elConPan,
				zoomControl: elConZoom,
				mapTypeControl: elConMapT,
				scaleControl: elConScale,
				streetViewControl: elConStreetV,
				overviewMapControl: elConOverview
			},
			scrollwheel: elScroll,
			maptype: elType,
			markers: elMarkers,
			icon: elIcon,
			latitude: elLat,
			longitude: elLon,
			address: elAdd,
			zoom: Number( elZoom ),
			styles: elStyles
		});


	});

};



window.scwGridFilterPlugin = window.scwGridFilterPlugin || {};

window.SEMICOLON_gridFilterInit = function( $gridFilterEl ){

	$gridFilterEl = $gridFilterEl.filter(':not(.customjs)');

	if( $gridFilterEl.length < 1 ){
		return true;
	}

	$gridFilterEl.each( function(){
		let element		= $(this),
			elCon		= element.attr('data-container'),
			elActClass	= element.attr('data-active-class'),
			elDefFilter	= element.attr('data-default');

		if( !elActClass ) { elActClass = 'activeFilter'; }

		element.find('a').off( 'click' ).on( 'click', function(){
			element.find('li').removeClass( elActClass );
			$(this).parent('li').addClass( elActClass );
			let selector = $(this).attr('data-filter');
			$(elCon).isotope({ filter: selector });
			return false;
		});

		if( elDefFilter ) {
			element.find('li').removeClass( elActClass );
			element.find('[data-filter="'+ elDefFilter +'"]').parent('li').addClass( elActClass );
			$(elCon).isotope({ filter: elDefFilter });
		}
	});

	$('.grid-shuffle').off( 'click' ).on( 'click', function(){
		let element = $(this),
			elCon = element.attr('data-container');

		$(elCon).isotope('shuffle');
	});

};



window.scwHoverAnimationPlugin = window.scwHoverAnimationPlugin || {};

window.SEMICOLON_hoverAnimationInit = function( $hoverAnimationEl ){

	$hoverAnimationEl = $hoverAnimationEl.filter(':not(.customjs)');

	if( $hoverAnimationEl.length < 1 ){
		return true;
	}

	$hoverAnimationEl.each(function(){
		let element			= $(this),
			elAnimate		= element.attr( 'data-hover-animate' ),
			elAnimateOut	= element.attr( 'data-hover-animate-out' ) || 'fadeOut',
			elSpeed			= element.attr( 'data-hover-speed' ) || 600,
			elDelay			= element.attr( 'data-hover-delay' ),
			elParent		= element.attr( 'data-hover-parent' ),
			elReset			= element.attr( 'data-hover-reset' ) || 'false';

		element.addClass( 'not-animated' );

		if( !elParent ) {
			if( element.parents( '.bg-overlay' ).length > 0 ) {
				elParent = element.parents( '.bg-overlay' );
			} else {
				elParent = element;
			}
		} else {
			if( elParent == 'self' ) {
				elParent = element;
			} else {
				elParent = element.parents( elParent );
			}
		}

		let elDelayT = 0;

		if( elDelay ) {
			elDelayT = Number( elDelay );
		}

		if( elSpeed ) {
			element.css({ 'animation-duration': Number( elSpeed ) + 'ms' });
		}

		let t, x;

		elParent.hover( function(){

			clearTimeout( x );
			t = setTimeout( function(){
					element.addClass( 'not-animated' ).removeClass( elAnimateOut + ' not-animated' ).addClass( elAnimate + ' animated' );
				}, elDelayT );

		}, function(){

			element.addClass( 'not-animated' ).removeClass( elAnimate + ' not-animated' ).addClass( elAnimateOut + ' animated' );
			if( elReset == 'true' ) {
				x = setTimeout( function(){
					element.removeClass( elAnimateOut + ' animated' ).addClass( 'not-animated' );
				}, Number( elSpeed ) );
			}
			clearTimeout( t );

		});
	});

};



window.scwHtml5VideoPlugin = window.scwHtml5VideoPlugin || {};

window.SEMICOLON_html5VideoInit = function( $html5Video ){

	if( $html5Video.length < 1 ){
		return true;
	}

	$html5Video.each(function(){
		let element = $(this),
			elVideo = element.find('video'),
			divWidth = element.outerWidth(),
			divHeight = element.outerHeight(),
			elWidth = ( (16*divHeight)/9 ),
			elHeight = divHeight;

		if( elWidth < divWidth ) {
			elWidth = divWidth;
			elHeight = ( (9*divWidth)/16 );
		}

		elVideo.css({ width: elWidth+'px', height: elHeight+'px' });

		if( elHeight > divHeight ) {
			elVideo.css({ 'left': '', 'top': -( ( elHeight - divHeight )/2 )+'px' });
		}

		if( elWidth > divWidth ) {
			elVideo.css({ 'top': '', 'left': -( ( elWidth - divWidth )/2 )+'px' });
		}

		if( SEMICOLON.isMobile.any() && !element.hasClass('no-placeholder') ) {
			let placeholderImg = elVideo.attr('poster');

			if( placeholderImg != '' ) {
				element.append('<div class="video-placeholder" style="background-image: url('+ placeholderImg +');"></div>')
			}

			elVideo.hide();
		}
	});

};



/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */




window.scwInstagramPlugin = window.scwInstagramPlugin || {};

window.SEMICOLON_instagramPhotosInit = function( $instagramPhotosEl ){

	if( $instagramPhotosEl.length < 1 ){
		return true;
	}

	$instagramPhotosEl.each(function() {
		let element		= $(this),
			elUsername	= element.attr('data-user'),
			elLimit		= element.attr('data-count') || 12;

		if( Number( elLimit ) > 12 ) {
			elLimit = 12;
		}

		SEMICOLON_getInstagramPhotos( element, elUsername, elLimit );
	});

};

window.SEMICOLON_getInstagramPhotos = function( element, username, limit, nextkey = '', images = false ) {

	let newimages = '';

	$.getJSON( 'https://www.instagram.com/'+ username +'/?__a=1'+nextkey, function( instagram ){

		let instaUser		= instagram.graphql.user,
			instaTimeline	= instaUser.edge_owner_to_timeline_media,
			instaPrivate	= instaUser.is_private;

		if( !instaPrivate ) {

			if( images ) {
				images = images.concat( instaTimeline.edges );
			} else {
				images = instaTimeline.edges;
			}

			if( nextkey != '' ) {
				nextkey = '&max_id='+instaTimeline.page_info.end_cursor;
			}

			if( images.length < limit ) {
				images = SEMICOLON_getInstagramPhotos( element, username, limit, nextkey, images );
			}

			if( images.length > 0 ) {
				let html = '';
				for (let i = 0; i < limit; i++) {
					if ( i === limit )
						continue;

					let photo = images[i];

					html = html+'<a class="grid-item" href="https://instagram.com/p/'+ photo.node.shortcode +'" target="_blank"><img src="'+ photo.node.thumbnail_resources[2].src +'" alt="Image"></a>';
				}

				element.html( html ).removeClass('customjs');
				SEMICOLON.widget.masonryThumbs();
			}

		} else {
			console.log( 'Private Account!' );
			return false;
		}

	});

	return newimages;

}



/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */


window.SEMICOLON_gridContainerInit = function( $gridContainerEl ){

	$gridContainerEl = $gridContainerEl.filter(':not(.customjs)');

	if( $gridContainerEl.length < 1 ){
		return true;
	}

	$gridContainerEl.each( function(){
		let element			= $(this),
			elTransition	= element.attr('data-transition') || '0.65s',
			elLayoutMode	= element.attr('data-layout') || 'masonry',
			elStagger		= element.attr('data-stagger') || 0,
			elBase			= element.attr('data-basewidth') || '.portfolio-item:not(.wide):eq(0)',
			elOriginLeft	= true,
			elGrid;

		if( $('body').hasClass('rtl') ) { elOriginLeft = false; }

		if( element.hasClass('portfolio') || element.hasClass('post-timeline') ){
			elGrid = element.isotope({
				layoutMode: elLayoutMode,
				isOriginLeft: elOriginLeft,
				transitionDuration: elTransition,
				stagger: Number( elStagger ),
				percentPosition: true,
				masonry: {
					columnWidth: element.find( elBase )[0]
				}
			});
		} else {
			elGrid = element.isotope({
				layoutMode: elLayoutMode,
				isOriginLeft: elOriginLeft,
				transitionDuration: elTransition,
				stagger: Number( elStagger ),
				percentPosition: true,
			});
		}

		if( element.data('isotope') ) {
			element.addClass('has-init-isotope');
		}

		let elementInterval = setInterval( function(){
			if( element.find('.lazy.lazy-loaded').length == element.find('.lazy').length ) {
				setTimeout( function(){
					element.filter('.has-init-isotope').isotope('layout');
				}, 800 );
				clearInterval( elementInterval );
			}
		}, 1000);

		let resizeTimer;

		$(window).on( 'resize', function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				element.filter('.has-init-isotope').isotope('layout');
			}, 250);
		});

		$(window).on( 'lazyLoadLoaded', function(){
			element.filter('.has-init-isotope').isotope('layout');
		});

	});

};



// Lazyload v16.1.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).LazyLoad=n()}(this,(function(){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,a=n&&"classList"in document.createElement("p"),o=n&&window.devicePixelRatio>1,r={elements_selector:"IMG",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!1,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},r,n)},l=function(t,n){var e,i=new t(n);try{e=new CustomEvent("LazyLoad::Initialized",{detail:{instance:i}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:i})}window.dispatchEvent(e)},s=function(t,n){return t.getAttribute("data-"+n)},u=function(t,n,e){var i="data-"+n;null!==e?t.setAttribute(i,e):t.removeAttribute(i)},d=function(t){return s(t,"ll-status")},f=function(t,n){return u(t,"ll-status",n)},_=function(t){return f(t,null)},g=function(t){return null===d(t)},v=function(t){return"native"===d(t)},b=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i))},p=function(t,n){a?t.classList.add(n):t.className+=(t.className?" ":"")+n},h=function(t,n){a?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},m=function(t){return t.llTempImage},E=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t)}},I=function(t,n){t&&(t.loadingCount+=n)},A=function(t,n){t&&(t.toLoadCount=n)},L=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},y=function(t,n,e){e&&t.setAttribute(n,e)},w=function(t,n){t.removeAttribute(n)},k=function(t){return!!t.llOriginalAttrs},z=function(t){if(!k(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},O=function(t){if(k(t)){var n=t.llOriginalAttrs;y(t,"src",n.src),y(t,"srcset",n.srcset),y(t,"sizes",n.sizes)}},C=function(t,n){y(t,"sizes",s(t,n.data_sizes)),y(t,"srcset",s(t,n.data_srcset)),y(t,"src",s(t,n.data_src))},M=function(t){w(t,"src"),w(t,"srcset"),w(t,"sizes")},N=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&L(e).forEach(n)},x=function(t,n){L(t).forEach(n)},R={IMG:function(t,n){N(t,(function(t){z(t),C(t,n)})),z(t),C(t,n)},IFRAME:function(t,n){y(t,"src",s(t,n.data_src))},VIDEO:function(t,n){x(t,(function(t){y(t,"src",s(t,n.data_src))})),y(t,"poster",s(t,n.data_poster)),y(t,"src",s(t,n.data_src)),t.load()}},G=function(t,n){var e=R[t.tagName];e&&e(t,n)},T=function(t,n,e){I(e,1),p(t,n.class_loading),f(t,"loading"),b(n.callback_loading,t,e)},D={IMG:function(t,n){u(t,n.data_src,null),u(t,n.data_srcset,null),u(t,n.data_sizes,null),N(t,(function(t){u(t,n.data_srcset,null),u(t,n.data_sizes,null)}))},IFRAME:function(t,n){u(t,n.data_src,null)},VIDEO:function(t,n){u(t,n.data_src,null),u(t,n.data_poster,null),x(t,(function(t){u(t,n.data_src,null)}))}},F=function(t,n){u(t,n.data_bg_multi,null),u(t,n.data_bg_multi_hidpi,null)},V=function(t,n){var e=D[t.tagName];e?e(t,n):function(t,n){u(t,n.data_bg,null),u(t,n.data_bg_hidpi,null)}(t,n)},j=["IMG","IFRAME","VIDEO"],P=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||b(t.callback_finish,n)},S=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},U=function(t,n,e){t.removeEventListener(n,e)},$=function(t){return!!t.llEvLisnrs},q=function(t){if($(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];U(t,e,i)}delete t.llEvLisnrs}},H=function(t,n,e){!function(t){delete t.llTempImage}(t),I(e,-1),function(t){t&&(t.toLoadCount-=1)}(e),h(t,n.class_loading),n.unobserve_completed&&E(t,e)},B=function(t,n,e){var i=m(t)||t;$(i)||function(t,n,e){$(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";S(t,i,n),S(t,"error",e)}(i,(function(a){!function(t,n,e,i){var a=v(n);H(n,e,i),p(n,e.class_loaded),f(n,"loaded"),V(n,e),b(e.callback_loaded,n,i),a||P(e,i)}(0,t,n,e),q(i)}),(function(a){!function(t,n,e,i){var a=v(n);H(n,e,i),p(n,e.class_error),f(n,"error"),b(e.callback_error,n,i),a||P(e,i)}(0,t,n,e),q(i)}))},J=function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG")}(t),B(t,n,e),function(t,n,e){var i=s(t,n.data_bg),a=s(t,n.data_bg_hidpi),r=o&&a?a:i;r&&(t.style.backgroundImage='url("'.concat(r,'")'),m(t).setAttribute("src",r),T(t,n,e))}(t,n,e),function(t,n,e){var i=s(t,n.data_bg_multi),a=s(t,n.data_bg_multi_hidpi),r=o&&a?a:i;r&&(t.style.backgroundImage=r,function(t,n,e){p(t,n.class_applied),f(t,"applied"),F(t,n),n.unobserve_completed&&E(t,n),b(n.callback_applied,t,e)}(t,n,e))}(t,n,e)},K=function(t,n,e){!function(t){return j.indexOf(t.tagName)>-1}(t)?J(t,n,e):function(t,n,e){B(t,n,e),G(t,n),T(t,n,e)}(t,n,e)},Q=["IMG","IFRAME"],W=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},X=function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,e,i){b(e.callback_enter,t,n,i),function(t,n,e){n.unobserve_entered&&E(t,e)}(t,e,i),function(t){return!g(t)}(t)||K(t,e,i)}(t.target,t,n,e):function(t,n,e,i){g(t)||(function(t,n,e,i){e.cancel_on_exit&&function(t){return"loading"===d(t)}(t)&&"IMG"===t.tagName&&(q(t),function(t){N(t,(function(t){M(t)})),M(t)}(t),function(t){N(t,(function(t){O(t)})),O(t)}(t),h(t,e.class_loading),I(i,-1),_(t),b(e.callback_cancel,t,n,i))}(t,n,e,i),b(e.callback_exit,t,n,i))}(t.target,t,n,e)}))},Y=function(t){return Array.prototype.slice.call(t)},Z=function(t){return t.container.querySelectorAll(t.elements_selector)},tt=function(t){return function(t){return"error"===d(t)}(t)},nt=function(t,n){return function(t){return Y(t).filter(g)}(t||Z(n))},et=function(t,e){var a=c(t);this._settings=a,this.loadingCount=0,function(t,n){i&&!W(t)&&(n._observer=new IntersectionObserver((function(e){X(e,t,n)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))}(a,this),function(t,e){n&&window.addEventListener("online",(function(){!function(t,n){var e;(e=Z(t),Y(e).filter(tt)).forEach((function(n){h(n,t.class_error),_(n)})),n.update()}(t,e)}))}(a,this),this.update(e)};return et.prototype={update:function(t){var n,a,o=this._settings,r=nt(t,o);A(this,r.length),!e&&i?W(o)?function(t,n,e){t.forEach((function(t){-1!==Q.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),function(t,n,e){B(t,n,e),G(t,n),V(t,n),f(t,"native")}(t,n,e))})),A(e,0)}(r,o,this):(a=r,function(t){t.disconnect()}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,a)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),Z(this._settings).forEach((function(t){delete t.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;nt(t,e).forEach((function(t){K(t,e,n)}))}},et.load=function(t,n){var e=c(n);K(t,e)},et.resetStatus=function(t){_(t)},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)l(t,e);else l(t,n)}(et,window.lazyLoadOptions),et}));

window.SEMICOLON_lazyLoadInit = function( $lazyLoadEl ){

	window.lazyLoadInstance = new LazyLoad({
		threshold: 150,
		elements_selector: '.lazy',
		class_loading: 'lazy-loading',
		class_loaded: 'lazy-loaded',
		class_error: 'lazy-error',
		callback_loaded: (el)=>{
			$(window).trigger( 'lazyLoadLoaded' );
		}
	});

};



/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */

window.SEMICOLON_lightboxInit = function( $lightboxEl ){

	$lightboxEl = $lightboxEl.filter(':not(.customjs)');

	if( $lightboxEl.length < 1 ){
		return true;
	}

	$lightboxEl.each( function(){
		let element			= $(this),
			elType			= element.attr('data-lightbox'),
			elCloseButton	= element.attr('data-close-button') || 'outside',
			elDisableUnder	= element.attr('data-disable-under') || 600,
			$body			= $('body');

		if( elCloseButton == 'inside' ) {
			elCloseButton = true;
		} else {
			elCloseButton = false;
		}

		if( elType == 'image' ) {
			element.magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				closeBtnInside: elCloseButton,
				fixedContentPos: true,
				mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
				image: {
					verticalFit: true
				}
			});
		}

		if( elType == 'gallery' ) {
			if( element.find('a[data-lightbox="gallery-item"]').parent('.clone').hasClass('clone') ) {
				element.find('a[data-lightbox="gallery-item"]').parent('.clone').find('a[data-lightbox="gallery-item"]').attr('data-lightbox','');
			}

			if( element.find('a[data-lightbox="gallery-item"]').parents('.cloned').hasClass('cloned') ) {
				element.find('a[data-lightbox="gallery-item"]').parents('.cloned').find('a[data-lightbox="gallery-item"]').attr('data-lightbox','');
			}

			element.magnificPopup({
				delegate: 'a[data-lightbox="gallery-item"]',
				type: 'image',
				closeOnContentClick: true,
				closeBtnInside: elCloseButton,
				fixedContentPos: true,
				mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
				image: {
					verticalFit: true
				},
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				}
			});
		}

		if( elType == 'iframe' ) {
			element.magnificPopup({
				disableOn: Number( elDisableUnder ),
				type: 'iframe',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		}

		if( elType == 'inline' ) {
			element.magnificPopup({
				type: 'inline',
				mainClass: 'mfp-no-margins mfp-fade',
				closeBtnInside: elCloseButton,
				fixedContentPos: true,
				overflowY: 'scroll'
			});
		}

		if( elType == 'ajax' ) {
			element.magnificPopup({
				type: 'ajax',
				closeBtnInside: elCloseButton,
				autoFocusLast: false,
				callbacks: {
					ajaxContentAdded: function(mfpResponse) {
						SEMICOLON.widget.loadFlexSlider();
						SEMICOLON.initialize.resizeVideos();
						SEMICOLON.widget.masonryThumbs();
					},
					open: function() {
						$body.addClass('ohidden');
					},
					close: function() {
						$body.removeClass('ohidden');
					}
				}
			});
		}

		if( elType == 'ajax-gallery' ) {
			element.magnificPopup({
				delegate: 'a[data-lightbox="ajax-gallery-item"]',
				type: 'ajax',
				closeBtnInside: elCloseButton,
				autoFocusLast: false,
				gallery: {
					enabled: true,
					preload: 0,
					navigateByImgClick: false
				},
				callbacks: {
					ajaxContentAdded: function(mfpResponse) {
						SEMICOLON.widget.loadFlexSlider();
						SEMICOLON.initialize.resizeVideos();
						SEMICOLON.widget.masonryThumbs();
					},
					open: function() {
						$body.addClass('ohidden');
					},
					close: function() {
						$body.removeClass('ohidden');
					}
				}
			});
		}

		element.on( 'mfpOpen', function(){
			let lightboxItem	= $.magnificPopup.instance.currItem.el,
				lightboxClass	= $( lightboxItem ).attr('data-lightbox-class'),
				lightboxBgClass	= $( lightboxItem ).attr('data-lightbox-bg-class');

			if( lightboxClass != '' ) {
				$( $.magnificPopup.instance.container ).addClass( lightboxClass );
			}

			if( lightboxBgClass != '' ) {
				$( $.magnificPopup.instance.bgOverlay ).addClass( lightboxBgClass );
			}
		});
	});

};

window.SEMICOLON_modalInit = function( $modalEl ){

	$modalEl = $modalEl.filter(':not(.customjs)');

	if( $modalEl.length < 1 ){
		return true;
	}

	$modalEl.each( function(){
		let element			= $(this),
			elTarget		= element.attr('data-target'),
			elTargetValue	= elTarget.split('#')[1],
			elDelay			= element.attr('data-delay') || 500,
			elTimeout		= element.attr('data-timeout'),
			elAnimateIn		= element.attr('data-animate-in'),
			elAnimateOut	= element.attr('data-animate-out'),
			elCookies		= element.attr('data-cookies');

		if( elCookies == "false" ) { Cookies.remove( elTargetValue ); }

		if( elCookies == 'true' ) {
			let elementCookie = Cookies.get( elTargetValue );

			if( typeof elementCookie !== 'undefined' && elementCookie == '0' ) {
				return true;
			}
		}

		elDelay = Number(elDelay) + 500;

		setTimeout(function() {
			$.magnificPopup.open({
				items: { src: elTarget },
				type: 'inline',
				mainClass: 'mfp-no-margins mfp-fade',
				closeBtnInside: false,
				fixedContentPos: true,
				removalDelay: 500,
				callbacks: {
					open: function(){
						if( elAnimateIn != '' ) {
							$(elTarget).addClass( elAnimateIn + ' animated' );
						}
					},
					beforeClose: function(){
						if( elAnimateOut != '' ) {
							$(elTarget).removeClass( elAnimateIn ).addClass( elAnimateOut );
						}
					},
					afterClose: function() {
						if( elAnimateIn != '' || elAnimateOut != '' ) {
							$(elTarget).removeClass( elAnimateIn + ' ' + elAnimateOut + ' animated' );
						}
						if( elCookies == 'true' ) {
							Cookies.set( elTargetValue, '0' );
						}
					}
				}
			}, 0);
		}, elDelay );

		if( elTimeout != '' ) {
			setTimeout(function() {
				$.magnificPopup.close();
			}, elDelay + Number(elTimeout) );
		}
	});

};



window.scwLinkScrollPlugin = window.scwLinkScrollPlugin || {};

/*!
 * jQuery Color Animations v@VERSION
 * https://github.com/jquery/jquery-color
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: @DATE
 */

window.SEMICOLON_linkScrollInit = function( $linkScrollEl ){

	$linkScrollEl = $linkScrollEl.filter(':not(.customjs)');

	if( $linkScrollEl.length < 1 ){
		return true;
	}

	$linkScrollEl.off( 'click' ).on( 'click', function(){
		let element = $(this),
			elAnchor = element.attr('data-scrollto'),
			elSpeed = element.attr('data-speed'),
			elOffset = element.attr('data-offset'),
			elEasing = element.attr('data-easing'),
			elHighlight = element.attr('data-highlight');

		if( element.parents('.primary-menu').hasClass('on-click') ) { return true; }

		if( !elSpeed ) { elSpeed = 750; }
		if( !elOffset ) { elOffset = SEMICOLON.initialize.topScrollOffset(); }
		if( !elEasing ) { elEasing = 'easeOutQuad'; }

		$('html,body').stop(true).animate({
			'scrollTop': $( elAnchor ).offset().top - Number(elOffset)
		}, Number(elSpeed), elEasing, function(){
			if( elHighlight ) {
				if( $(elAnchor).find('.highlight-me').length > 0 ) {
					$(elAnchor).find('.highlight-me').animate({'backgroundColor': elHighlight}, 300);
					setTimeout( function(){
							$(elAnchor).find('.highlight-me').animate({'backgroundColor': 'transparent'}, 300);
					}, 500 );
				} else {
					$(elAnchor).animate({'backgroundColor': elHighlight}, 300);
					setTimeout( function(){
						$(elAnchor).animate({'backgroundColor': 'transparent'}, 300);
					}, 500 );
				}
			}
		});

		return false;
	});

};



window.scwMasonryThumbsPlugin = window.scwMasonryThumbsPlugin || {};

window.SEMICOLON_masonryThumbsInit = function( $masonryThumbsEl ){

	if( $masonryThumbsEl.length < 1 ){
		return true;
	}

	let $body = $('body');

	$masonryThumbsEl.each( function(){
		let element			= $(this),
			elBig			= element.attr('data-big');

		element.children().css({ 'width': '' });

		let firstElementWidth = element.children().eq(0).outerWidth();

		element.filter('.has-init-isotope').isotope({
			masonry: {
				columnWidth: firstElementWidth
			}
		});

		if( elBig ) {
			elBig = elBig.split(",");
			let elBigNum = '',
				bigi = '';
			for( bigi = 0; bigi < elBig.length; bigi++ ){
				elBigNum = Number(elBig[bigi]) - 1;
				element.children().eq(elBigNum).addClass('grid-item-big');
			}
		}

		element.find('.grid-item-big').css({ width: firstElementWidth*2 + 'px' });

		setTimeout( function(){
			element.filter('.has-init-isotope').isotope( 'layout' );
		}, 500);
	});

};



window.scwNavTreePlugin = window.scwNavTreePlugin || {};

window.SEMICOLON_navtreeInit = function( $navTreeEl ){

	$navTreeEl = $navTreeEl.filter(':not(.customjs)');

	if( $navTreeEl.length < 1 ){
		return true;
	}

	$navTreeEl.each( function(){
		let element		= $(this),
			elSpeed		= element.attr('data-speed') || 250,
			elEasing	= element.attr('data-easing') || 'swing';

		element.find( 'ul li:has(ul)' ).addClass('sub-menu');
		element.find( 'ul li:has(ul) > a' ).append( ' <i class="icon-angle-down"></i>' );

		if( element.hasClass('on-hover') ){
			element.find( 'ul li:has(ul):not(.active)' ).hover( function(e){
				$(this).children('ul').stop(true, true).slideDown( Number(elSpeed), elEasing);
			}, function(){
				$(this).children('ul').delay(250).slideUp( Number(elSpeed), elEasing);
			});
		} else {
			element.find( 'ul li:has(ul) > a' ).off( 'click' ).on( 'click', function(e){
				let childElement = $(this);
				element.find( 'ul li' ).not(childElement.parents()).removeClass('active');
				childElement.parent().children('ul').slideToggle( Number(elSpeed), elEasing, function(){
					$(this).find('ul').hide();
					$(this).find('li.active').removeClass('active');
				});
				element.find( 'ul li > ul' ).not(childElement.parent().children('ul')).not(childElement.parents('ul')).slideUp( Number(elSpeed), elEasing );
				childElement.parent('li:has(ul)').toggleClass('active');
				e.preventDefault();
			});
		}
	});

};



// Toastr v2.1.4
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=u(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),d(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)d(e(n[o]),t)}function d(t,n,o){var s=o&&o.force?o.force:!1;return t&&(s||0===e(":focus",t).length)?(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0):!1}function u(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),d(),u(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function d(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function u(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;return!e(":focus",I).length||t?(clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})):void 0}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.4",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});

window.SEMICOLON_notificationInit = function( $notifyEl ){

	$notifyEl = $notifyEl.filter(':not(.customjs)');

	toastr.remove();
	let element		= $notifyEl,
		elPosition	= element.attr('data-notify-position') || 'top-right',
		elType		= element.attr('data-notify-type'),
		elMsg		= element.attr('data-notify-msg') || 'Please set a message!',
		elTimeout	= element.attr('data-notify-timeout') || 5000,
		elClose		= element.attr('data-notify-close');

	elPosition = 'toast-' + elPosition;
	if( elClose == 'true' ) { elClose = true; } else { elClose = false; }

	toastr.options.positionClass = elPosition;
	toastr.options.timeOut = Number( elTimeout );
	toastr.options.closeButton = elClose;
	toastr.options.closeHtml = '<button><i class="icon-remove"></i></button>';

	if( elType == 'warning' ) {
		toastr.warning(elMsg);
	} else if( elType == 'error' ) {
		toastr.error(elMsg);
	} else if( elType == 'success' ) {
		toastr.success(elMsg);
	} else {
		toastr.info(elMsg);
	}

	return false;

};



window.scwOnePageModulePlugin = window.scwOnePageModulePlugin || {};

let $onePageMenu,
	windowEl		= $(window),
	windowWidth		= windowEl.width(),
	$body			= $('body'),
	$pageSectionEl,
	locationHash	= location.hash,
	onePageMenuActiveClass;

window.SEMICOLON_onePageModule = function( $onePageMenuEl ){

	$onePageMenu = $onePageMenuEl.filter(':not(.customjs)');

	if( $onePageMenu.length < 1 ){
		return true;
	}

	if( $('a[data-href="'+ locationHash +'"]').parents( '.one-page-menu' ).length > 0 ) {

		windowEl.on('beforeunload', function() {
			windowEl.scrollTop(0);
		});

		windowEl.scrollTop(0);

		let linkElement = $( locationHash );

		if( linkElement.length > 0 ) {
			setTimeout( function(){
				let linkElementOff	= linkElement.offset().top,
					linkElSettings = JSON.parse( linkElement.attr('data-onepage-settings') );

				$('html,body').stop(true, true).animate({
					'scrollTop': linkElementOff - Number( linkElSettings.offset )
				}, linkElSettings.speed, linkElSettings.easing );
			}, 1200);
		}

	}

	windowEl.scrollEnd( function(){
		SEMICOLON_onePageScroller();
	}, 500 );

	$onePageMenu.each( function(){

		let	element		= $(this);

		onePageMenuActiveClass	= element.attr('data-active-class') || 'current';
		$onePageMenu	= element;

		if( element.hasClass('no-offset') ) {
			elOffset = 0;
		}

		let linkEls = element.find('a[data-href]');

		linkEls.each( function(){

			let linkEl			= $(this),
				linkElAnchor	= linkEl.attr('data-href'),
				linkElement		= $( linkElAnchor ),
				linkElSettings	= SEMICOLON_onePageSettings( linkElAnchor, $('a[data-href="'+ linkElAnchor +'"]') );

			if( linkElement.length > 0 ) {
				setTimeout( function(){
					linkElement.attr( 'data-onepage-settings', JSON.stringify( linkElSettings ) );
					$pageSectionEl = $('[data-onepage-settings]');
				}, 1000);
			}

		});

		linkEls.off( 'click' ).on( 'click', function(){

			let linkEl			= $(this),
				linkElAnchor	= linkEl.attr('data-href'),
				linkElement		= $( linkElAnchor );

			if( linkElement.length > 0 ) {

				let linkElSettings = JSON.parse( linkElement.attr('data-onepage-settings') );

				element.find('li').removeClass( onePageMenuActiveClass );
				element.find('a[data-href="' + linkElAnchor + '"]').parent('li').addClass( onePageMenuActiveClass );

				if( windowWidth < 992 || $body.hasClass('overlay-menu') ) {
					$onePageMenuEl.parents('.primary-menu').filter( ':not(.mobile-menu-off-canvas)' ).find('.menu-container').stop(true, true).slideUp(200);
					$('#page-menu').toggleClass('page-menu-open', false);
					$body.toggleClass('primary-menu-open', false);
				}

				setTimeout( function(){
					let linkElementOff	= linkElement.offset().top;
					$('html,body').stop(true, true).animate({
						'scrollTop': linkElementOff - Number( linkElSettings.offset )
					}, Number(linkElSettings.speed), linkElSettings.easing);
				}, 250);
			}

			return false;
		});

	});

};

window.SEMICOLON_onePageScroller = function(){
	$onePageMenu.find('[data-href]').parent().removeClass( onePageMenuActiveClass );
	$onePageMenu.find('[data-href="#' + SEMICOLON_onePageCurrentSection() + '"]').parent().addClass( onePageMenuActiveClass );
};

window.SEMICOLON_onePageCurrentSection = function(){
	let currentOnePageSection;

	if( typeof $pageSectionEl === 'undefined' ) {
		return true;
	}

	$pageSectionEl.each(function(index) {
		let element = $(this),
			elSettings = JSON.parse( element.attr('data-onepage-settings') ),
			h = element.offset().top - elSettings.offset - 5,
			y = windowEl.scrollTop();

		if( ( y >= h ) && ( y < h + element.height() ) && ( element.attr('id') != currentOnePageSection ) ) {
			currentOnePageSection = element.attr('id');
		}
	});

	return currentOnePageSection;
};

window.SEMICOLON_onePageSettings = function( hash, element ) {

	if( hash === 'undefined' && element.length < 1 ) {
		return true;
	}

	let settings	= {},
		child		= element,
		parent		= element.parents( '.one-page-menu' ),
		offsetTop	= $( hash ).offset().top,
		elSpeed		= child.attr( 'data-speed' ),
		elOffset	= child.attr( 'data-offset' ),
		elEasing	= child.attr( 'data-easing' );

	if( !elSpeed ) {
		elSpeed	= parent.attr( 'data-speed' ) || 1250;
	}

	if( !elEasing ) {
		elEasing	= parent.attr( 'data-easing' ) || 'easeOutQuad';
	}

	if( !elOffset ) {
		element		= parent;
		elOffset	= parent.attr( 'data-offset' ) || SEMICOLON.initialize.topScrollOffset();
	}

	let elOffsetXXL	= element.attr( 'data-offset-xxl' ),
		elOffsetXL	= element.attr( 'data-offset-xl' ),
		elOffsetLG	= element.attr( 'data-offset-lg' ),
		elOffsetMD	= element.attr( 'data-offset-md' ),
		elOffsetSM	= element.attr( 'data-offset-sm' ),
		elOffsetXS	= element.attr( 'data-offset-xs' );

	if( !elOffsetXXL ) { elOffsetXXL = Number(elOffset); }
	if( !elOffsetXL ) { elOffsetXL = Number(elOffsetXXL); }
	if( !elOffsetLG ) { elOffsetLG = Number(elOffsetXL); }
	if( !elOffsetMD ) { elOffsetMD = Number(elOffsetLG); }
	if( !elOffsetSM ) { elOffsetSM = Number(elOffsetMD); }
	if( !elOffsetXS ) { elOffsetXS = Number(elOffsetSM); }

	if( $body.hasClass('device-xxl') ) {
		elOffset = elOffsetXXL;
	} else if( $body.hasClass('device-xl') ) {
		elOffset = elOffsetXL;
	} else if( $body.hasClass('device-lg') ) {
		elOffset = elOffsetLG;
	} else if( $body.hasClass('device-md') ) {
		elOffset = elOffsetMD;
	} else if( $body.hasClass('device-sm') ) {
		elOffset = elOffsetSM;
	} else if( $body.hasClass('device-xs') ) {
		elOffset = elOffsetXS;
	}

	settings.offset = elOffset;

	settings.speed = elSpeed;
	settings.easing = elEasing;

	return settings;

};



/*!
 * animsition v4.0.2
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */

window.SEMICOLON_pageTransitionInit = function( $wrapperEl ){

	let $body		= $('body'),
		$wrapper	= $('#wrapper');

	if( $body.hasClass('no-transition') ) { return true; }
	if( !$body.hasClass('page-transition') ) { return true; }

	if( !$().animsition ) {
		$body.addClass('no-transition');
		console.log('pageTransition: Animsition not Defined.');
		return true;
	}

	window.onpageshow = function(event) {
		if(event.persisted) {
			window.location.reload();
		}
	};

	let elAnimIn				= $body.attr('data-animation-in') || 'fadeIn',
		elAnimOut				= $body.attr('data-animation-out') || 'fadeOut',
		elSpeedIn				= $body.attr('data-speed-in') || 1500,
		elSpeedOut				= $body.attr('data-speed-out') || 800,
		elTimeoutActive			= false,
		elTimeout				= $body.attr('data-loader-timeout'),
		elLoader				= $body.attr('data-loader'),
		elLoaderColor			= $body.attr('data-loader-color'),
		elLoaderHtml			= $body.attr('data-loader-html') || '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>',
		elLoaderAppend			= '',
		elLoaderBefore			= '<div class="css3-spinner">',
		elLoaderAfter			= '</div>',
		elLoaderBg				= '',
		elLoaderBorder			= '',
		elLoaderBgClass			= '',
		elLoaderBorderClass		= '',
		elLoaderBgClass2		= '',
		elLoaderBorderClass2	= '';

	if( !elTimeout ) {
		elTimeoutActive = false;
		elTimeout = false;
	} else {
		elTimeoutActive = true;
		elTimeout = Number(elTimeout);
	}

	if( elLoaderColor ) {
		if( elLoaderColor == 'theme' ) {
			elLoaderBgClass		= ' bg-color';
			elLoaderBorderClass	= ' border-color';
			elLoaderBgClass2		= ' class="bg-color"';
			elLoaderBorderClass2	= ' class="border-color"';
		} else {
			elLoaderBg		= ' style="background-color:'+ elLoaderColor +';"';
			elLoaderBorder	= ' style="border-color:'+ elLoaderColor +';"';
		}
		elLoaderAppend			= '<div class="css3-spinner-bounce1'+ elLoaderBgClass +'"'+ elLoaderBg +'></div><div class="css3-spinner-bounce2'+ elLoaderBgClass +'"'+ elLoaderBg +'></div><div class="css3-spinner-bounce3'+ elLoaderBgClass +'"'+ elLoaderBg +'></div>'
	}

	if( elLoader == '2' ) {
		elLoaderAppend = '<div class="css3-spinner-flipper'+ elLoaderBgClass +'"'+ elLoaderBg +'></div>';
	} else if( elLoader == '3' ) {
		elLoaderAppend = '<div class="css3-spinner-double-bounce1'+ elLoaderBgClass +'"'+ elLoaderBg +'></div><div class="css3-spinner-double-bounce2'+ elLoaderBgClass +'"'+ elLoaderBg +'></div>';
	} else if( elLoader == '4' ) {
		elLoaderAppend = '<div class="css3-spinner-rect1'+ elLoaderBgClass +'"'+ elLoaderBg +'></div><div class="css3-spinner-rect2'+ elLoaderBgClass +'"'+ elLoaderBg +'></div><div class="css3-spinner-rect3'+ elLoaderBgClass +'"'+ elLoaderBg +'></div><div class="css3-spinner-rect4'+ elLoaderBgClass +'"'+ elLoaderBg +'></div><div class="css3-spinner-rect5'+ elLoaderBgClass +'"'+ elLoaderBg +'></div>';
	} else if( elLoader == '5' ) {
		elLoaderAppend = '<div class="css3-spinner-cube1'+ elLoaderBgClass +'"'+ elLoaderBg +'></div><div class="css3-spinner-cube2'+ elLoaderBgClass +'"'+ elLoaderBg +'></div>';
	} else if( elLoader == '6' ) {
		elLoaderAppend = '<div class="css3-spinner-scaler'+ elLoaderBgClass +'"'+ elLoaderBg +'></div>';
	} else if( elLoader == '7' ) {
		elLoaderAppend = '<div class="css3-spinner-grid-pulse"><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div></div>';
	} else if( elLoader == '8' ) {
		elLoaderAppend = '<div class="css3-spinner-clip-rotate"><div'+ elLoaderBorderClass2 + elLoaderBorder +'></div></div>';
	} else if( elLoader == '9' ) {
		elLoaderAppend = '<div class="css3-spinner-ball-rotate"><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div></div>';
	} else if( elLoader == '10' ) {
		elLoaderAppend = '<div class="css3-spinner-zig-zag"><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div></div>';
	} else if( elLoader == '11' ) {
		elLoaderAppend = '<div class="css3-spinner-triangle-path"><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div></div>';
	} else if( elLoader == '12' ) {
		elLoaderAppend = '<div class="css3-spinner-ball-scale-multiple"><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div></div>';
	} else if( elLoader == '13' ) {
		elLoaderAppend = '<div class="css3-spinner-ball-pulse-sync"><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div><div'+ elLoaderBgClass2 + elLoaderBg +'></div></div>';
	} else if( elLoader == '14' ) {
		elLoaderAppend = '<div class="css3-spinner-scale-ripple"><div'+ elLoaderBorderClass2 + elLoaderBorder +'></div><div'+ elLoaderBorderClass2 + elLoaderBorder +'></div><div'+ elLoaderBorderClass2 + elLoaderBorder +'></div></div>';
	}

	if( !elLoaderHtml ) {
		elLoaderHtml = elLoaderAppend;
	}

	elLoaderHtml = elLoaderBefore + elLoaderHtml + elLoaderAfter;

	$wrapper.css({ 'opacity': 1 });

	$wrapper.animsition({
		inClass: elAnimIn,
		outClass: elAnimOut,
		inDuration: Number(elSpeedIn),
		outDuration: Number(elSpeedOut),
		linkElement: 'body:not(.device-md):not(.device-sm):not(.device-xs) .primary-menu:not(.on-click) .menu-link:not([target="_blank"]):not([href*="#"]):not([data-lightbox]):not([href^="mailto"]):not([href^="tel"]):not([href^="sms"]):not([href^="call"])',
		loading: true,
		loadingParentElement: 'body',
		loadingClass: 'page-transition-wrap',
		loadingInner: elLoaderHtml,
		timeout: elTimeoutActive,
		timeoutCountdown: elTimeout,
		onLoadEvent: true,
		browser: [ 'animation-duration', '-webkit-animation-duration'],
		overlay: false,
		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'body'
	});

};



/*! skrollr 0.6.30 (2015-06-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,T(),ha=this,c=c||{},ma=c.constants||{},c.easing)for(var d in c.easing)W[d]=c.easing[d];ta=c.edgeStrategy||"set",ka={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},la=c.forceHeight!==!1,la&&(Ka=c.scale||1),na=c.mobileDeceleration||y,pa=c.smoothScrolling!==!1,qa=c.smoothScrollingDuration||A,ra={targetTop:ha.getScrollTop()},Sa=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Sa?(ja=b.getElementById(c.skrollrBody||z),ja&&ga(),X(),Ea(e,[s,v],[t])):Ea(e,[s,u],[t]),ha.refresh(),wa(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;(b!==Pa||a!==Oa)&&(Pa=b,Oa=a,Qa=!0)});var g=U();return function h(){$(),va=g(h)}(),ha}var e,f,g={get:function(){return ha},init:function(a){return ha||new d(a)},VERSION:"0.6.29"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z="skrollr-body",A=200,B="start",C="end",D="center",E="bottom",F="___skrollable_id",G=/^(?:input|textarea|button|select)$/i,H=/^\s+|\s+$/g,I=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,J=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,K=/^(@?[a-z\-]+)\[(\w+)\]$/,L=/-([a-z0-9_])/g,M=function(a,b){return b.toUpperCase()},N=/[\-+]?[\d]*\.?[\d]+/g,O=/\{\?\}/g,P=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,Q=/[a-z\-]+-gradient/g,R="",S="",T=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(R=c.match(a)||+c==c&&b[c].match(a))break;if(!R)return void(R=S="");R=R[0],"-"===R.slice(0,1)?(S=R,R={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[R]):S="-"+R.toLowerCase()+"-"}},U=function(){var b=a.requestAnimationFrame||a[R.toLowerCase()+"RequestAnimationFrame"],c=Ha();return(Sa||!b)&&(b=function(b){var d=Ha()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Ha(),b()},e)}),b},V=function(){var b=a.cancelAnimationFrame||a[R.toLowerCase()+"CancelAnimationFrame"];return(Sa||!b)&&(b=function(b){return a.clearTimeout(b)}),b},W={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,ia=[],Ra=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=pa,k=ta,l=!1;if(f&&F in g&&delete g[F],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(I);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(L,M)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==B&&u!==C?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===C?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Ka))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&F in g?(y=g[F],w=ia[y].styleAttr,x=ia[y].classAttr):(y=g[F]=Ra++,w=g.style.cssText,x=Da(g)),ia[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Ea(g,[o],[])}}}for(Aa(),d=0,e=a.length;e>d;d++){var z=ia[a[d][F]];z!==c&&(_(z),ba(z))}return ha},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===E?g-=d:b===D&&(g-=d/2),c===E?g+=h:c===D&&(g+=h/2),g+=ha.getScrollTop(),g+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Ha(),e=ha.getScrollTop(),f=b.duration===c?x:b.duration;return oa={startTop:e,topDiff:a-e,targetTop:a,duration:f,startTime:d,endTime:d+f,easing:W[b.easing||w],done:b.done},oa.topDiff||(oa.done&&oa.done.call(ha,!1),oa=c),ha},d.prototype.stopAnimateTo=function(){oa&&oa.done&&oa.done.call(ha,!0),oa=c},d.prototype.isAnimatingTo=function(){return!!oa},d.prototype.isMobile=function(){return Sa},d.prototype.setScrollTop=function(b,c){return sa=c===!0,Sa?Ta=i.min(i.max(b,0),Ja):a.scrollTo(0,b),ha},d.prototype.getScrollTop=function(){return Sa?Ta:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ja},d.prototype.on=function(a,b){return ka[a]=b,ha},d.prototype.off=function(a){return delete ka[a],ha},d.prototype.destroy=function(){var a=V();a(va),ya(),Ea(e,[t],[s,u,v]);for(var b=0,d=ia.length;d>b;b++)fa(ia[b].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ja&&g.setStyle(ja,"transform","none"),ha=c,ja=c,ka=c,la=c,Ja=0,Ka=1,ma=c,na=c,La="down",Ma=-1,Oa=0,Pa=0,Qa=!1,oa=c,pa=c,qa=c,ra=c,sa=c,Ra=0,ta=c,Sa=!1,Ta=0,ua=c};var X=function(){var d,g,h,j,o,p,q,r,s,t,u,v;wa(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,G.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),ha.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:G.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,ha.setScrollTop(Ta-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!G.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/na),B=z*A+.5*na*A*A,C=ha.getScrollTop()-B,D=0;C>Ja?(D=(Ja-C)/B,C=Ja):0>C&&(D=-C/B,C=0),A*=1-D,ha.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},Y=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Ba();for(j=0,k=ia.length;k>j;j++)for(a=ia[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(fa(b),h.frame=ha.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,fa(b,!0)),h.frame+=m,la&&!h.isEnd&&h.frame>Ja&&(Ja=h.frame);for(Ja=i.max(Ja,Ca()),j=0,k=ia.length;k>j;j++){for(a=ia[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ja-h.offset+m);a.keyFrames.sort(Ia)}},Z=function(a,b){for(var c=0,d=ia.length;d>c;c++){var e,f,i=ia[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Ea(j,[p],[r,q]),w&&x>-1&&(za(j,n.eventType,La),i.lastFrameIndex=-1)):(Ea(j,[r],[p,q]),w&&m>x&&(za(j,s.eventType,La),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":fa(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=ea(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Ea(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=da(A.props[e].value,B.props[e].value,C),f=ea(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===La?za(j,A.eventType,La):za(j,B.eventType,La),i.lastFrameIndex=z);break}}},$=function(){Qa&&(Qa=!1,Aa());var a,b,d=ha.getScrollTop(),e=Ha();if(oa)e>=oa.endTime?(d=oa.targetTop,a=oa.done,oa=c):(b=oa.easing((e-oa.startTime)/oa.duration),d=oa.startTop+b*oa.topDiff|0),ha.setScrollTop(d,!0);else if(!sa){var f=ra.targetTop-d;f&&(ra={startTop:Ma,topDiff:d-Ma,targetTop:d,startTime:Na,endTime:Na+qa}),e<=ra.endTime&&(b=W.sqrt((e-ra.startTime)/qa),d=ra.startTop+b*ra.topDiff|0)}if(sa||Ma!==d){La=d>Ma?"down":Ma>d?"up":La,sa=!1;var h={curTop:d,lastTop:Ma,maxTop:Ja,direction:La},i=ka.beforerender&&ka.beforerender.call(ha,h);i!==!1&&(Z(d,ha.getScrollTop()),Sa&&ja&&g.setStyle(ja,"transform","translate(0, "+-Ta+"px) "+ua),Ma=d,ka.render&&ka.render.call(ha,h)),a&&a.call(ha,!1)}Na=e},_=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=J.exec(h.props));)f=g[1],e=g[2],d=f.match(K),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?aa(e):[e.slice(1)],i[f]={value:e,easing:W[d]};h.props=i}},aa=function(a){var b=[];return P.lastIndex=0,a=a.replace(P,function(a){return a.replace(N,function(a){return a/255*100+"%"})}),S&&(Q.lastIndex=0,a=a.replace(Q,function(a){return S+a})),a=a.replace(N,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},ba=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)ca(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)ca(a.keyFrames[b],d)},ca=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},da=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},ea=function(a){var b=1;return O.lastIndex=0,a[0].replace(O,function(){return a[b++]})},fa=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=ia[d[F]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Ea(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Da(d),d.style.cssText=c.styleAttr,Ea(d,c.classAttr)))},ga=function(){ua="translateZ(0)",g.setStyle(ja,"transform",ua);var a=j(ja),b=a.getPropertyValue("transform"),c=a.getPropertyValue(S+"transform"),d=b&&"none"!==b||c&&"none"!==c;d||(ua="")};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(L,M).replace("-",""),"zIndex"===b)isNaN(c)?d[b]=c:d[b]=""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{R&&(d[R+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Ua.push({element:b,name:f,listener:d})},xa=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},ya=function(){for(var a,b=0,c=Ua.length;c>b;b++)a=Ua[b],xa(a.element,a.name,a.listener);Ua=[]},za=function(a,b,c){ka.keyframe&&ka.keyframe.call(ha,a,b,c)},Aa=function(){var a=ha.getScrollTop();Ja=0,la&&!Sa&&(f.style.height=""),Y(),la&&!Sa&&(f.style.height=Ja+e.clientHeight+"px"),Sa?ha.setScrollTop(i.min(ha.getScrollTop(),Ja)):ha.setScrollTop(a,!0),sa=!0},Ba=function(){var a,b,c=e.clientHeight,d={};for(a in ma)b=ma[a],"function"==typeof b?b=b.call(ha):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Ca=function(){var a,b=0;return ja&&(b=i.max(ja.offsetHeight,ja.scrollHeight)),a=i.max(b,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight),a-e.clientHeight},Da=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Ea=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;i>h;h++)g=Ga(g).replace(Ga(e[h])," ");g=Fa(g);for(var j=0,k=d.length;k>j;j++)-1===Ga(g).indexOf(Ga(d[j]))&&(g+=" "+d[j]);b[f]=Fa(g)},Fa=function(a){return a.replace(H,"")},Ga=function(a){return" "+a+" "},Ha=Date.now||function(){return+new Date},Ia=function(a,b){return a.frame-b.frame},Ja=0,Ka=1,La="down",Ma=-1,Na=Ha(),Oa=0,Pa=0,Qa=!1,Ra=0,Sa=!1,Ta=0,Ua=[];"function"==typeof define&&define.amd?define([],function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document);

window.SEMICOLON_parallaxInit = function( $parallaxEl ){

	$parallaxEl = $parallaxEl.filter(':not(.customjs)');

	if( $parallaxEl.length < 1 ){
		return true;
	}

	if( !SEMICOLON.isMobile.any() ){
		skrollr.init({forceHeight: false});
	} else {
		$parallaxEl.addClass('mobile-parallax');
	}

};



/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/

window.SEMICOLON_roundedSkillInit = function( $roundedSkillEl ){

	$roundedSkillEl = $roundedSkillEl.filter(':not(.customjs)');

	if( $roundedSkillEl.length < 1 ){
		return true;
	}

	$roundedSkillEl.each(function(){
		let element			= $(this),
			elSize			= element.attr('data-size') || 140,
			elSpeed			= element.attr('data-speed') || 2000,
			elWidth			= element.attr('data-width') || 4,
			elColor			= element.attr('data-color') || '#0093BF',
			elTrackColor	= element.attr('data-trackcolor') || 'rgba(0,0,0,0.04)';

		let properties = {
			size:		Number( elSize ),
			speed:		Number( elSpeed ),
			width:		Number( elWidth ),
			color:		elColor,
			trackcolor:	elTrackColor
		};

		element.css({ 'width': elSize+'px', 'height': elSize+'px', 'line-height': elSize+'px' });

		if( $('body').hasClass('device-xl') || $('body').hasClass('device-lg') ){
			element.animate({opacity:0}, 10);
			let observer = new IntersectionObserver((entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (!element.hasClass('skills-animated')) {
							var t = setTimeout( function(){ element.css({opacity: 1}); }, 100 );
							SEMICOLON_runRoundedSkills( element, properties );
							element.addClass('skills-animated');
						}
						observer.unobserve( entry.target );
					}
				});
			}, {rootMargin: '-50px'});
			observer.observe( element[0] );
		} else {
			SEMICOLON_runRoundedSkills( element, properties );
		}
	});

};

window.SEMICOLON_runRoundedSkills = function( element, properties ){
	element.easyPieChart({
		size: properties.size,
		animate: properties.speed,
		scaleColor: false,
		trackColor: properties.trackcolor,
		lineWidth: properties.width,
		lineCap: 'square',
		barColor: properties.color
	});
};



window.scwPricingSwitcherPlugin = window.scwPricingSwitcherPlugin || {};

window.SEMICOLON_pricingSwitcherFn = function( checkbox, parent, pricing, defClass, actClass ) {
	parent.find('.pts-left,.pts-right').removeClass( actClass ).addClass( defClass );
	pricing.find('.pts-switch-content-left,.pts-switch-content-right').addClass('d-none');

	if( checkbox.filter(':checked').length > 0 ) {
		parent.find('.pts-right').removeClass( defClass ).addClass( actClass );
		pricing.find('.pts-switch-content-right').removeClass('d-none');
	} else {
		parent.find('.pts-left').removeClass( defClass ).addClass( actClass );
		pricing.find('.pts-switch-content-left').removeClass('d-none');
	}
};

window.SEMICOLON_pricingSwitcherInit = function( $pricingSwitcherEl ){

	$pricingSwitcherEl = $pricingSwitcherEl.filter(':not(.customjs)');

	if( $pricingSwitcherEl.length < 1 ){
		return true;
	}

	$pricingSwitcherEl.each( function(){
		var element		= $(this),
			elCheck		= element.find(':checkbox'),
			elParent	= $(this).parents('.pricing-tenure-switcher'),
			elDefClass	= $(this).attr('data-default-class') || 'text-muted op-05',
			elActClass	= $(this).attr('data-active-class') || 'font-weight-bold',
			elPricing	= $( elParent.attr('data-container') );

		SEMICOLON_pricingSwitcherFn( elCheck, elParent, elPricing, elDefClass, elActClass );

		elCheck.on( 'change', function(){
			SEMICOLON_pricingSwitcherFn( elCheck, elParent, elPricing, elDefClass, elActClass );
		});
	});

};



window.scwProgressPlugin = window.scwProgressPlugin || {};

window.SEMICOLON_progressInit = function( $progressEl ){

	$progressEl = $progressEl.filter(':not(.customjs)');

	if( $progressEl.length < 1 ){
		return true;
	}

	$progressEl.each(function(){
		let element	= $(this),
			elBar	= element.parent('li'),
			elValue	= elBar.attr('data-percent');

		if( $('body').hasClass('device-xl') || $('body').hasClass('device-lg') ){
			let observer = new IntersectionObserver((entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (!elBar.hasClass('skills-animated')) {
							SEMICOLON.widget.counter({
								el: element.find('.counter-instant')
							});
							elBar.find('.progress').css({width: elValue + "%"}).addClass('skills-animated');
						}
						observer.unobserve( entry.target );
					}
				});
			}, {rootMargin: '-50px'});
			observer.observe( element[0] );
		} else {
			SEMICOLON.widget.counter( element.find('.counter-instant')[0] );
			elBar.find('.progress').css({width: elValue + "%"});
		}
	});

};



window.scwQuantityPlugin = window.scwQuantityPlugin || {};

window.SEMICOLON_quantityInit = function( $quantityEl ){

	$quantityEl = $quantityEl.filter(':not(.customjs)');

	if( $quantityEl.length < 1 ){
		return true;
	}

	$(".plus").off( 'click' ).on( 'click', function(){
		let element = $(this).parents('.quantity').find('.qty'),
			elValue = element.val(),
			elStep = element.attr('step') || 1,
			elMax = element.attr('max'),
			intRegex = /^\d+$/;

		if( elMax && ( Number(elValue) >= Number( elMax ) ) ) { return false; }

		if( intRegex.test( elValue ) ) {
			let elValuePlus = Number(elValue) + Number(elStep);
			element.val( elValuePlus ).change();
		} else {
			element.val( Number(elStep) ).change();
		}

		return false;
	});

	$(".minus").off( 'click' ).on( 'click', function(){
		let element = $(this).parents('.quantity').find('.qty'),
			elValue = element.val(),
			elStep = element.attr('step') || 1,
			elMin = element.attr('min'),
			intRegex = /^\d+$/;

		if( !elMin || elMin < 0 ) { elMin = 1; }

		if( intRegex.test( elValue ) ) {
			if( Number(elValue) > Number( elMin ) ) {
				let elValueMinus = Number(elValue) - Number(elStep);
				element.val( elValueMinus ).change();
			}
		} else {
			element.val( Number(elStep) ).change();
		}

		return false;
	});

};



window.scwReadMorePlugin = window.scwReadMorePlugin || {};

window.SEMICOLON_readmoreInit = function( $readmoreEl ){

	$readmoreEl = $readmoreEl.filter(':not(.customjs)');

	if( $readmoreEl.length < 1 ){
		return true;
	}

	$readmoreEl.each( function(){
		let element		= $(this),
			elHeight	= element.outerHeight(),
			elSize		= element.attr('data-readmore-size') || '10rem',
			elSpeed		= element.attr('data-readmore-speed') || 500,
			elTrigger	= element.attr('data-readmore-trigger') || '.read-more-trigger',
			elTriggerO	= element.attr('data-readmore-trigger-open') || 'Read More',
			elTriggerC	= element.attr('data-readmore-trigger-close') || 'Read Less';

		elTrigger = element.find( elTrigger );
		elTrigger.html( elTriggerO );
		elSpeed = Number( elSpeed );

		element.addClass( 'read-more-wrap' ).css({ 'height': elSize, '-webkit-transition-duration': elSpeed + 'ms', 'transition-duration': elSpeed + 'ms' }).append('<div class="read-more-mask"></div>');

		let elMask		= element.find('.read-more-mask'),
			elMaskD		= element.attr('data-readmore-mask') || 'true',
			elMaskColor	= element.attr('data-readmore-maskcolor') || '#FFF',
			elMaskSize	= element.attr('data-readmore-masksize') || '100%';

		if( elMaskD == 'true' ) {
			elMask.css({ 'height': elMaskSize, 'background-image': 'linear-gradient( '+ SEMICOLON_HEXtoRGBA( elMaskColor, 0 ) +', '+ SEMICOLON_HEXtoRGBA( elMaskColor, 1 ) +' )' });
		} else {
			elMask.addClass('d-none');
		}

		elTrigger.off( 'click' ).on( 'click', function(){
			if( element.hasClass('read-more-wrap-open') ) {
				element.css({ 'height': elSize }).removeClass('read-more-wrap-open');
				setTimeout( function(){
					elTrigger.html( elTriggerO );
				}, elSpeed );
				if( elMaskD == 'true' ) {
					elMask.fadeIn( elSpeed );
				}
			} else {
				if( elTriggerC == 'false' ) {
					elTrigger.remove();
				}
				let elHeightN = elHeight + elTrigger.outerHeight();
				element.css({ 'height': elHeightN, 'overflow': '' }).addClass('read-more-wrap-open');
				setTimeout( function(){
					elTrigger.html( elTriggerC );
				}, elSpeed );
				if( elMaskD == 'true' ) {
					elMask.fadeOut( elSpeed );
				}
			}

			return false;
		});

	});

};

window.SEMICOLON_HEXtoRGBA = function( hex, op ){
	let c;
	if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
		c= hex.substring(1).split('');
		if(c.length== 3){
			c= [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c= '0x'+c.join('');
		return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+op+')';
	}
	console.log('Bad Hex');
};



window.scwShapeDividerPlugin = window.scwShapeDividerPlugin || {};

window.SEMICOLON_shapeDividerInit = function( $shapeDividerEl ){

	if( $shapeDividerEl.length < 1 ){
		return true;
	}

	$shapeDividerEl.each( function(){
		let element		= $(this),
			elShape		= element.attr('data-shape') || 'valley',
			elWidth		= element.attr('data-width') || 100,
			elHeight	= element.attr('data-height') || 100,
			elFill		= element.attr('data-fill'),
			elOut		= element.attr('data-outside') || 'false',
			elPos		= element.attr('data-position') || 'top',
			elId		= 'shape-divider-' + Math.floor( Math.random() * 10000 ),
			shape		= '',
			width, height, fill,
			outside		= '';

		if( elWidth < 100 ) {
			elWidth = 100;
		}

		width	= 'width: calc( '+ Number( elWidth ) +'% + 1.5px );';
		height	= 'height: '+ Number( elHeight ) +'px;';
		fill	= 'fill: '+elFill+';';

		if( elOut == 'true' ) {
			if( elPos == 'bottom' ) {
				outside = '#'+ elId +'.shape-divider { bottom: -'+( Number( elHeight ) - 1 ) +'px; } ';
			} else {
				outside = '#'+ elId +'.shape-divider { top: -'+( Number( elHeight ) - 1 ) +'px; } ';
			}
		}

		let css = outside + '#'+ elId +'.shape-divider svg { '+ width + height +' } #'+ elId +'.shape-divider .shape-divider-fill { '+ fill +' }',
			head = document.head || document.getElementsByTagName('head')[0],
			style = document.createElement('style');

		head.appendChild(style);

		style.type = 'text/css';
		style.appendChild(document.createTextNode(css));

		element.attr( 'id', elId );

		switch( elShape ){

			case 'valley':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 355" preserveAspectRatio="none"><defs><style>.b{opacity:.5}.c{opacity:.3}</style></defs><path fill="none" d="M999.45 0H0v165.72l379.95 132.46L999.45 0z"></path><path class="b shape-divider-fill" d="M379.95 298.18l28.47 9.92L1000 118.75V0h-.55l-619.5 298.18zM492.04 337.25L1000 252.63V118.75L408.42 308.1l83.62 29.15z"></path><path class="b shape-divider-fill" d="M492.04 337.25L1000 252.63V118.75L408.42 308.1l83.62 29.15z"></path><path class="shape-divider-fill" d="M530.01 350.49l20.22 4.51H1000V252.63l-507.96 84.62 37.97 13.24z"></path><path class="b shape-divider-fill" d="M530.01 350.49l20.22 4.51H1000V252.63l-507.96 84.62 37.97 13.24z"></path><path class="b shape-divider-fill" d="M530.01 350.49l20.22 4.51H1000V252.63l-507.96 84.62 37.97 13.24z"></path><path class="shape-divider-fill" d="M542.94 355h7.29l-20.22-4.51 12.93 4.51z"></path><path class="b shape-divider-fill" d="M542.94 355h7.29l-20.22-4.51 12.93 4.51z"></path><path class="c shape-divider-fill" d="M542.94 355h7.29l-20.22-4.51 12.93 4.51z"></path><path class="b shape-divider-fill" d="M542.94 355h7.29l-20.22-4.51 12.93 4.51z"></path><path class="c shape-divider-fill" d="M379.95 298.18L0 165.72v66.59l353.18 78.75 26.77-12.88z"></path><path class="c shape-divider-fill" d="M353.18 311.06L0 232.31v71.86l288.42 38.06 64.76-31.17z"></path><path class="c shape-divider-fill" d="M353.18 311.06L0 232.31v71.86l288.42 38.06 64.76-31.17z"></path><path class="b shape-divider-fill" d="M380.28 317.11l28.14-9.01-28.47-9.92-26.77 12.88 27.1 6.05z"></path><path class="c shape-divider-fill" d="M380.28 317.11l28.14-9.01-28.47-9.92-26.77 12.88 27.1 6.05z"></path><path class="b shape-divider-fill" d="M479.79 339.29l12.25-2.04-83.62-29.15-28.14 9.01 99.51 22.18z"></path><path class="b shape-divider-fill" d="M479.79 339.29l12.25-2.04-83.62-29.15-28.14 9.01 99.51 22.18z"></path><path class="c shape-divider-fill" d="M479.79 339.29l12.25-2.04-83.62-29.15-28.14 9.01 99.51 22.18z"></path><path class="shape-divider-fill" d="M530.01 350.49l-37.97-13.24-12.25 2.04 50.22 11.2z"></path><path class="b shape-divider-fill" d="M530.01 350.49l-37.97-13.24-12.25 2.04 50.22 11.2z"></path><path class="b shape-divider-fill" d="M530.01 350.49l-37.97-13.24-12.25 2.04 50.22 11.2z"></path><path class="c shape-divider-fill" d="M530.01 350.49l-37.97-13.24-12.25 2.04 50.22 11.2zM288.42 342.23l9.46 1.25 82.4-26.37-27.1-6.05-64.76 31.17z"></path><path class="b shape-divider-fill" d="M288.42 342.23l9.46 1.25 82.4-26.37-27.1-6.05-64.76 31.17z"></path><path class="c shape-divider-fill" d="M288.42 342.23l9.46 1.25 82.4-26.37-27.1-6.05-64.76 31.17z"></path><path class="b shape-divider-fill" d="M380.28 317.11l-82.4 26.37 87.3 11.52h.34l94.27-15.71-99.51-22.18z"></path><path class="c shape-divider-fill" d="M380.28 317.11l-82.4 26.37 87.3 11.52h.34l94.27-15.71-99.51-22.18z"></path><path class="b shape-divider-fill" d="M380.28 317.11l-82.4 26.37 87.3 11.52h.34l94.27-15.71-99.51-22.18z"></path><path class="c shape-divider-fill" d="M380.28 317.11l-82.4 26.37 87.3 11.52h.34l94.27-15.71-99.51-22.18z"></path><path class="shape-divider-fill" d="M479.79 339.29L385.52 355h157.42l-12.93-4.51-50.22-11.2z"></path><path class="b shape-divider-fill" d="M479.79 339.29L385.52 355h157.42l-12.93-4.51-50.22-11.2z"></path><path class="c shape-divider-fill" d="M479.79 339.29L385.52 355h157.42l-12.93-4.51-50.22-11.2z"></path><path class="b shape-divider-fill" d="M479.79 339.29L385.52 355h157.42l-12.93-4.51-50.22-11.2z"></path><path class="c shape-divider-fill" d="M479.79 339.29L385.52 355h157.42l-12.93-4.51-50.22-11.2z"></path><path class="shape-divider-fill" d="M288.42 342.23L0 304.17V355h385.18l-87.3-11.52-9.46-1.25z"></path></svg>';
				break;

			case 'valley-2':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="shape-divider-fill" d="M194,99c186.7,0.7,305-78.3,306-97.2c1,18.9,119.3,97.9,306,97.2c114.3-0.3,194,0.3,194,0.3s0-91.7,0-100c0,0,0,0,0-0 L0,0v99.3C0,99.3,79.7,98.7,194,99z"></path></svg>';
				break;

			case 'valley-3':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M1280 0L640 70 0 0v140l640-70 640 70V0z" opacity="0.5"></path><path class="shape-divider-fill" d="M1280 0H0l640 70 640-70z"></path></svg>';
				break;

			case 'mountain':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="shape-divider-fill" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path></svg>';
				break;

			case 'mountain-2':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M640 140L1280 0H0z" opacity="0.5"/><path class="shape-divider-fill" d="M640 98l640-98H0z"/></svg>';
				break;

			case 'mountain-3':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 491.58" preserveAspectRatio="none"><g style="isolation:isolate"><path class="shape-divider-fill" d="M1000 479.4v-87.96L500 0 0 391.46v87.96l500-335.94 500 335.92z" opacity="0.12" mix-blend-mode="overlay"/><path class="shape-divider-fill" d="M1000 487.31v-7.91L500 143.48 0 479.42v7.91l500-297.96 500 297.94z" opacity="0.25" mix-blend-mode="overlay"/><path class="shape-divider-fill" d="M1000 487.31L500 189.37 0 487.33v4.25h1000v-4.27z"/></g></svg>';
				break;

			case 'mountain-4':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="shape-divider-fill" d="M738,99l262-93V0H0v5.6L738,99z"></path></svg>';
				break;

			case 'mountain-5':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M978.81 122.25L0 0h1280l-262.1 116.26a73.29 73.29 0 0 1-39.09 5.99z" opacity="0.5"></path><path class="shape-divider-fill" d="M983.19 95.23L0 0h1280l-266 91.52a72.58 72.58 0 0 1-30.81 3.71z"></path></svg>';
				break;

			case 'mountains':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="shape-divider-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path><path class="shape-divider-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path><path class="shape-divider-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path></svg>';
				break;

			case 'mountains-2':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 247" preserveAspectRatio="none"><path class="shape-divider-fill" d="M0 200.92v.26l.75-.77-.75.51z"></path><path class="shape-divider-fill" d="M279.29 208.39c0-4.49 74.71-29.88 74.71-29.88l61.71 61.26L550 153.1l134.14 88.17L874.28 50 1000 178.51v-.33L874.28 0 684.14 191.27 550 103.1l-134.29 86.67L354 128.51s-74.71 25.39-74.71 29.88S144.23 52.08 144.23 52.08L.75 200.41l143.48-98.33s135.06 110.8 135.06 106.31z" opacity="0.25" isolation="isolate"></path><path class="shape-divider-fill" d="M1000 178.51L874.28 50 684.14 241.27 550 153.1l-134.29 86.67L354 178.51s-74.71 25.39-74.71 29.88-135.06-106.31-135.06-106.31L.75 200.41l-.75.77V247h1000z"></path><path class="shape-divider-fill" d="M1000 178.51L874.28 50 684.14 241.27 550 153.1l-134.29 86.67L354 178.51s-74.71 25.39-74.71 29.88-135.06-106.31-135.06-106.31L.75 200.41l-.75.77V247h1000z" opacity="0.25" isolation="isolate"></path></svg>';
				break;

			case 'mountains-3':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="shape-divider-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path></svg>';
				break;

			case 'mountains-4':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M0 90.72l140-28.28 315.52 24.14L796.48 65.8 1140 104.89l140-14.17V0H0v90.72z" opacity="0.5"></path><path class="shape-divider-fill" d="M0 0v47.44L170 0l626.48 94.89L1110 87.11l170-39.67V0H0z"></path></svg>';
				break;

			case 'plataeu':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M1280 0l-131.81 111.68c-16.47 14-35.47 21-54.71 20.17L173 94a76.85 76.85 0 0 1-36.79-11.46L0 0z"></path></svg>';
				break;

			case 'plataeu-2':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M1093.48 131.85L173 94a76.85 76.85 0 0 1-36.79-11.46L0 0h1280l-131.81 111.68c-16.47 13.96-35.47 20.96-54.71 20.17z" opacity="0.5"></path><path class="shape-divider-fill" d="M1094.44 119L172.7 68.72a74.54 74.54 0 0 1-25.19-5.95L0 0h1280l-133.85 102c-15.84 12.09-33.7 17.95-51.71 17z"></path></svg>';
				break;

			case 'hills':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M156.258 127.903l86.363-18.654 78.684 13.079L411.441 99.4l94.454 10.303L582.82 93.8l82.664 18.728 76.961-11.39L816.109 71.4l97.602 9.849L997.383 50.4l66.285 14.694 70.793-24.494h79.863L1280 0H0v122.138l60.613 9.965z"/></svg>';
				break;

			case 'hills-2':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M1214.323 66.051h-79.863l-70.793 18.224-66.285-10.933-83.672 22.953-97.601-7.328-73.664 22.125-76.961 8.475-82.664-13.934-76.926 11.832-94.453-7.666-90.137 17.059-78.684-9.731-86.363 13.879-95.644 3.125L0 126.717V0h1280l-.001 35.844z" opacity="0.5"></path><path class="shape-divider-fill" d="M0 0h1280v.006l-70.676 36.578-74.863 4.641-70.793 23.334-66.285-11.678-83.672 29.618-97.602-7.07-63.664 21.421-76.961 12.649-91.664-20.798-77.926 17.66-94.453-7.574-90.137 21.595-78.683-9.884-86.363 16.074-95.645 6.211L0 127.905z"></path></svg>';
				break;

			case 'hills-3':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M156 35.51l95.46 34.84 120.04.24 71.5 33.35 90.09-3.91L640 137.65l102.39-37.17 85.55 10.65 88.11-7.19L992 65.28l73.21 5.31 66.79-22.1 77-.42L1280 0H0l64.8 38.69 91.2-3.18z"/></svg>';
				break;

			case 'hills-4':
				shape = '<svg viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M156 35.41l95.46 34.73 120.04.25 71.5 33.24 90.09-3.89L640 137.25l102.39-37.06 85.55 10.61 88.11-7.17L992 65.08l73.21 5.31L1132 48.35l77-.42L1280 0H0l64.8 38.57 91.2-3.16z" opacity="0.5"/><path class="shape-divider-fill" d="M156 28.32l95.46 27.79 120.04.2L443 82.9l90.09-3.11L640 109.8l102.39-29.65 85.55 8.49 88.11-5.74L992 52.07l73.21 4.24L1132 38.68l77-.34L1280 0H0l64.8 30.86 91.2-2.54z"/></svg>';
				break;

			case 'cloud':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice"><path class="shape-divider-fill" d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"></path></svg>';
				break;

			case 'cloud-2':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 86" preserveAspectRatio="xMidYMid slice"><path class="shape-divider-fill" d="M1280 0H0v65.2c6.8 0 13.5.9 20.1 2.6 14-21.8 43.1-28 64.8-14 5.6 3.6 10.3 8.3 14 13.9 7.3-1.2 14.8-.6 21.8 1.6 2.1-37.3 34.1-65.8 71.4-63.7 24.3 1.4 46 15.7 56.8 37.6 19-17.6 48.6-16.5 66.3 2.4C323 54 327.4 65 327.7 76.5c.4.2.8.4 1.2.7 3.3 1.9 6.3 4.2 8.9 6.9 15.9-23.8 46.1-33.4 72.8-23.3 11.6-31.9 46.9-48.3 78.8-36.6 9.1 3.3 17.2 8.7 23.8 15.7 6.7-6.6 16.7-8.4 25.4-4.8 29.3-37.4 83.3-44 120.7-14.8 14 11 24.3 26.1 29.4 43.1 4.7.6 9.3 1.8 13.6 3.8 7.8-24.7 34.2-38.3 58.9-30.5 14.4 4.6 25.6 15.7 30.3 30 14.2 1.2 27.7 6.9 38.5 16.2 11.1-35.7 49-55.7 84.7-44.7 14.1 4.4 26.4 13.3 35 25.3 12-5.7 26.1-5.5 37.9.6 3.9-11.6 15.5-18.9 27.7-17.5.2-.3.3-.6.5-.9 23.3-41.4 75.8-56 117.2-32.6 14.1 7.9 25.6 19.7 33.3 33.8 28.8-23.8 71.5-19.8 95.3 9 2.6 3.1 4.9 6.5 6.9 10 3.8-.5 7.6-.8 11.4-.8L1280 0z"/></svg>';
				break;

			case 'cloud-3':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 86" preserveAspectRatio="xMidYMid slice"><path class="shape-divider-fill" d="M833.9 27.5c-5.8 3.2-11 7.3-15.5 12.2-7.1-6.9-17.5-8.8-26.6-5-30.6-39.2-87.3-46.1-126.5-15.5-1.4 1.1-2.8 2.2-4.1 3.4C674.4 33.4 684 48 688.8 64.3c4.7.6 9.3 1.8 13.6 3.8 7.8-24.7 34.2-38.3 58.9-30.5 14.4 4.6 25.6 15.7 30.3 30 14.2 1.2 27.7 6.9 38.5 16.2C840.6 49.6 876 29.5 910.8 38c-20.4-20.3-51.8-24.6-76.9-10.5zM384 43.9c-9 5-16.7 11.9-22.7 20.3 15.4-7.8 33.3-8.7 49.4-2.6 3.7-10.1 9.9-19.1 18.1-26-15.4-2.3-31.2.6-44.8 8.3zm560.2 13.6c2 2.2 3.9 4.5 5.7 6.9 5.6-2.6 11.6-4 17.8-4.1-7.6-2.4-15.6-3.3-23.5-2.8zM178.7 7c29-4.2 57.3 10.8 70.3 37 8.9-8.3 20.7-12.8 32.9-12.5C256.4 1.8 214.7-8.1 178.7 7zm146.5 56.3c1.5 4.5 2.4 9.2 2.5 14 .4.2.8.4 1.2.7 3.3 1.9 6.3 4.2 8.9 6.9 5.8-8.7 13.7-15.7 22.9-20.5-11.1-5.2-23.9-5.6-35.5-1.1zM33.5 54.9c21.6-14.4 50.7-8.5 65 13 .1.2.2.3.3.5 7.3-1.2 14.8-.6 21.8 1.6.6-10.3 3.5-20.4 8.6-29.4.3-.6.7-1.2 1.1-1.8-32.1-17.2-71.9-10.6-96.8 16.1zm1228.9 2.7c2.3 2.9 4.4 5.9 6.2 9.1 3.8-.5 7.6-.8 11.4-.8V48.3c-6.4 1.8-12.4 5-17.6 9.3zM1127.3 11c1.9.9 3.7 1.8 5.6 2.8 14.2 7.9 25.8 19.7 33.5 34 13.9-11.4 31.7-16.9 49.6-15.3-20.5-27.7-57.8-36.8-88.7-21.5z" opacity="0.5"/><path class="shape-divider-fill" d="M0 0v66c6.8 0 13.5.9 20.1 2.6 3.5-5.4 8.1-10.1 13.4-13.6 24.9-26.8 64.7-33.4 96.8-16 10.5-17.4 28.2-29.1 48.3-32 36.1-15.1 77.7-5.2 103.2 24.5 19.7.4 37.1 13.1 43.4 31.8 11.5-4.5 24.4-4.2 35.6 1.1l.4-.2c15.4-21.4 41.5-32.4 67.6-28.6 25-21 62.1-18.8 84.4 5.1 6.7-6.6 16.7-8.4 25.4-4.8 29.2-37.4 83.3-44.1 120.7-14.8l1.8 1.5c37.3-32.9 94.3-29.3 127.2 8 1.2 1.3 2.3 2.7 3.4 4.1 9.1-3.8 19.5-1.9 26.6 5 24.3-26 65-27.3 91-3.1.5.5 1 .9 1.5 1.4 12.8 3.1 24.4 9.9 33.4 19.5 7.9-.5 15.9.4 23.5 2.8 7-.1 13.9 1.5 20.1 4.7 3.9-11.6 15.5-18.9 27.7-17.5.2-.3.3-.6.5-.9 22.1-39.2 70.7-54.7 111.4-35.6 30.8-15.3 68.2-6.2 88.6 21.5 18.3 1.7 35 10.8 46.5 25.1 5.2-4.3 11.1-7.4 17.6-9.3V0H0z"/></svg>';
				break;

			case 'wave':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="shape-divider-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path></svg>';
				break;

			case 'wave-2':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none"><path class="shape-divider-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7 c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3 c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6 c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1 c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8 c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1 z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1 c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"></path><path class="shape-divider-fill" d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"></path><path class="shape-divider-fill" d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"></path><path class="shape-divider-fill" d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"></path><path class="shape-divider-fill" d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"></path><path class="shape-divider-fill" d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"></path><path class="shape-divider-fill" d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"></path><path class="shape-divider-fill" d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"></path><path class="shape-divider-fill" d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"></path></svg>';
				break;

			case 'wave-3':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1047.1 3.7" preserveAspectRatio="xMidYMin slice"><path class="shape-divider-fill" d="M1047.1,0C557,0,8.9,0,0,0v1.6c0,0,0.6-1.5,2.7-0.3C3.9,2,6.1,4.1,8.3,3.5c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3C13.8,2,16,4.1,18.2,3.5c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3C23.6,2,25.9,4.1,28,3.5c0.9-0.2,1.5-1.9,1.5-1.9	c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3C63,2,65.3,4.1,67.4,3.5	C68.3,3.3,69,1.6,69,1.6s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3	C82.7,2,85,4.1,87.1,3.5c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3C92.6,2,94.8,4.1,97,3.5c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9	c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2	c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3	c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.6-0.4V0z M2.5,1.2C2.5,1.2,2.5,1.2,2.5,1.2C2.5,1.2,2.5,1.2,2.5,1.2z M2.7,1.4c0.1,0,0.1,0.1,0.1,0.1C2.8,1.4,2.8,1.4,2.7,1.4z"></path></svg>';
				break;

			case 'wave-4':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M0 51.76c36.21-2.25 77.57-3.58 126.42-3.58 320 0 320 57 640 57 271.15 0 312.58-40.91 513.58-53.4V0H0z" opacity="0.3"></path><path class="shape-divider-fill" d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 481.58-80V0H0z" opacity="0.5"></path><path class="shape-divider-fill" d="M0 0v3.4C28.2 1.6 59.4.59 94.42.59c320 0 320 84.3 640 84.3 285 0 316.17-66.85 545.58-81.49V0z"></path></svg>';
				break;

			case 'wave-5':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M0 0v100c20 17.3 40 29.51 80 29.51 51.79 0 74.69-48.57 151.75-48.57 73.72 0 91 54.88 191.56 54.88C543.95 135.8 554 14 665.69 14c109.46 0 98.85 87 188.2 87 70.37 0 69.81-33.73 115.6-33.73 55.85 0 62 39.62 115.6 39.62 58.08 0 57.52-46.59 115-46.59 39.8 0 60 22.48 79.89 39.69V0z"></path></svg>';
				break;

			case 'wave-6':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M504.854,80.066c7.812,0,14.893,0.318,21.41,0.879 c-25.925,22.475-56.093,40.852-102.946,40.852c-20.779,0-37.996-2.349-52.898-6.07C413.517,107.295,434.056,80.066,504.854,80.066z M775.938,51.947c19.145,18.596,39.097,35.051,77.956,35.051c46.907,0,62.299-14.986,80.912-24.98 c-21.357-15.783-46.804-28.348-85.489-28.348C816.829,33.671,794.233,41.411,775.938,51.947z" opacity="0.3"></path><path class="shape-divider-fill" d="M1200.112,46.292c39.804,0,59.986,22.479,79.888,39.69v16.805 c-19.903-10.835-40.084-21.777-79.888-21.777c-72.014,0-78.715,43.559-147.964,43.559c-56.84,0-81.247-35.876-117.342-62.552 c9.309-4.998,19.423-8.749,34.69-8.749c55.846,0,61.99,39.617,115.602,39.617C1143.177,92.887,1142.618,46.292,1200.112,46.292z M80.011,115.488c-40.006,0-60.008-12.206-80.011-29.506v16.806c20.003,10.891,40.005,21.782,80.011,21.782 c80.004,0,78.597-30.407,137.669-30.407c55.971,0,62.526,24.026,126.337,24.026c9.858,0,18.509-0.916,26.404-2.461 c-57.186-14.278-80.177-48.808-138.66-48.808C154.698,66.919,131.801,115.488,80.011,115.488z M526.265,80.945 c56.848,4.902,70.056,28.726,137.193,28.726c54.001,0,73.43-35.237,112.48-57.724C751.06,27.782,727.548,0,665.691,0 C597.381,0,567.086,45.555,526.265,80.945z" opacity="0.5"></path><path class="shape-divider-fill" d="M0,0v85.982c20.003,17.3,40.005,29.506,80.011,29.506c51.791,0,74.688-48.569,151.751-48.569 c58.482,0,81.473,34.531,138.66,48.808c43.096-8.432,63.634-35.662,134.433-35.662c7.812,0,14.893,0.318,21.41,0.879 C567.086,45.555,597.381,0,665.691,0c61.856,0,85.369,27.782,110.246,51.947c18.295-10.536,40.891-18.276,73.378-18.276 c38.685,0,64.132,12.564,85.489,28.348c9.309-4.998,19.423-8.749,34.69-8.749c55.846,0,61.99,39.617,115.602,39.617 c58.08,0,57.521-46.595,115.015-46.595c39.804,0,59.986,22.479,79.888,39.69V0H0z"></path></svg>';
				break;

			case 'slant':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="shape-divider-fill" d="M0,6V0h1000v100L0,6z"></path></svg>';
				break;

			case 'slant-2':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none"><path class="shape-divider-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path><path class="shape-divider-fill" opacity="0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path><path class="shape-divider-fill" opacity="0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path></svg>';
				break;

			case 'slant-3':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M1280 140V0H0l1280 140z" opacity="0.5"></path><path class="shape-divider-fill" d="M1280 98V0H0l1280 98z"></path></svg>';
				break;

			case 'rounded':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="shape-divider-fill" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"></path></svg>';
				break;

			case 'rounded-2':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="shape-divider-fill" d="M0,0c0,0,0,6,0,6.7c0,18,240.2,93.6,615.2,92.6C989.8,98.5,1000,25,1000,6.7c0-0.7,0-6.7,0-6.7H0z"></path></svg>';
				break;

			case 'rounded-3':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M0 0s573.08 140 1280 140V0z"></path></svg>';
				break;

			case 'rounded-4':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M0 0v60s573.09 80 1280 80V0z" opacity="0.3"></path><path class="shape-divider-fill" d="M0 0v30s573.09 110 1280 110V0z" opacity="0.5"></path><path class="shape-divider-fill" d="M0 0s573.09 140 1280 140V0z"></path></svg>';
				break;

			case 'rounded-5':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 140" preserveAspectRatio="none"><path class="shape-divider-fill" d="M0 0v.48C18.62 9.38 297.81 140 639.5 140 993.24 140 1280 0 1280 0z" opacity="0.3"></path><path class="shape-divider-fill" d="M0 .6c14 8.28 176.54 99.8 555.45 119.14C952.41 140 1280 0 1280 0H0z" opacity="0.5"></path><path class="shape-divider-fill" d="M726.29 101.2C1126.36 79.92 1281 0 1281 0H1c.05 0 325.25 122.48 725.29 101.2z"></path></svg>';
				break;

			case 'triangle':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 10" preserveAspectRatio="none"><path class="shape-divider-fill" d="M350,10L340,0h20L350,10z"></path></svg>';
				break;

			case 'drops':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice"><path class="shape-divider-fill" d="M0 0v1.4c.6.7 1.1 1.4 1.4 2 2 3.8 2.2 6.6 1.8 10.8-.3 3.3-2.4 9.4 0 12.3 1.7 2 3.7 1.4 4.6-.9 1.4-3.8-.7-8.2-.6-12 .1-3.7 3.2-5.5 6.9-4.9 4 .6 4.8 4 4.9 7.4.1 1.8-1.1 7 0 8.5.6.8 1.6 1.2 2.4.5 1.4-1.1.1-5.4.1-6.9.1-3.7.3-8.6 4.1-10.5 5-2.5 6.2 1.6 5.4 5.6-.4 1.7-1 9.2 2.9 6.3 1.5-1.1.7-3.5.5-4.9-.4-2.4-.4-4.3 1-6.5.9-1.4 2.4-3.1 4.2-3 2.4.1 2.7 2.2 4 3.7 1.5 1.8 1.8 2.2 3 .1 1.1-1.9 1.2-2.8 3.6-3.3 1.3-.3 4.8-1.4 5.9-.5 1.5 1.1.6 2.8.4 4.3-.2 1.1-.6 4 1.8 3.4 1.7-.4-.3-4.1.6-5.6 1.3-2.2 5.8-1.4 7 .5 1.3 2.1.5 5.8.1 8.1s-1.2 5-.6 7.4c1.3 5.1 4.4.9 4.3-2.4-.1-4.4-2-8.8-.5-13 .9-2.4 4.6-6.6 7.7-4.5 2.7 1.8.5 7.8.2 10.3-.2 1.7-.8 4.6.2 6.2.9 1.4 2 1.5 2.6-.3.5-1.5-.9-4.5-1-6.1-.2-1.7-.4-3.7.2-5.4 1.8-5.6 3.5 2.4 6.3.6 1.4-.9 4.3-9.4 6.1-3.1.6 2.2-1.3 7.8.7 8.9 4.2 2.3 1.5-7.1 2.2-8 3.1-4 4.7 3.8 6.1 4.1 3.1.7 2.8-7.9 8.1-4.5 1.7 1.1 2.9 3.3 3.2 5.2.4 2.2-1 4.5-.6 6.6 1 4.3 4.4 1.5 4.4-1.7 0-2.7-3-8.3 1.4-9.1 4.4-.9 7.3 3.5 7.8 6.9.3 2-1.5 10.9 1.3 11.3 4.1.6-3.2-15.7 4.8-15.8 4.7-.1 2.8 4.1 3.9 6.6 1 2.4 2.1 1 2.3-.8.3-1.9-.9-3.2 1.3-4.3 5.9-2.9 5.9 5.4 5.5 8.5-.3 2-1.7 8.4 2 8.1 6.9-.5-2.8-16.9 4.8-18.7 4.7-1.2 6.1 3.6 6.3 7.1.1 1.7-1.2 8.1.6 9.1 3.5 2 1.9-7 2-8.4.2-4 1.2-9.6 6.4-9.8 4.7-.2 3.2 4.6 2.7 7.5-.4 2.2 1.3 8.6 3.8 4.4 1.1-1.9-.3-4.1-.3-6 0-1.7.4-3.2 1.3-4.6 1-1.6 2.9-3.5 5.1-2.9 2.5.6 2.3 4.1 4.1 4.9 1.9.8 1.6-.9 2.3-2.1 1.2-2.1 2.1-2.1 4.4-2.4 1.4-.2 3.6-1.5 4.9-.5 2.3 1.7-.7 4.4.1 6.5.6 1.5 2.1 1.7 2.8.3.7-1.4-1.1-3.4-.3-4.8 1.4-2.5 6.2-1.2 7.2 1 2.3 4.8-3.3 12-.2 16.3 3 4.1 3.9-2.8 3.8-4.8-.4-4.3-2.1-8.9 0-13.1 1.3-2.5 5.9-5.7 7.9-2.4 2 3.2-1.3 9.8-.8 13.4.5 4.4 3.5 3.3 2.7-.8-.4-1.9-2.4-10 .6-11.1 3.7-1.4 2.8 7.2 6.5.4 2.2-4.1 4.9-3.1 5.2 1.2.1 1.5-.6 3.1-.4 4.6.2 1.9 1.8 3.7 3.3 1.3 1-1.6-2.6-10.4 2.9-7.3 2.6 1.5 1.6 6.5 4.8 2.7 1.3-1.5 1.7-3.6 4-3.7 2.2-.1 4 2.3 4.8 4.1 1.3 2.9-1.5 8.4.9 10.3 4.2 3.3 3-5.5 2.7-6.9-.6-3.9 1-7.2 5.5-5 4.1 2.1 4.3 7.7 4.1 11.6 0 .8-.6 9.5 2.5 5.2 1.2-1.7-.1-7.7.1-9.6.3-2.9 1.2-5.5 4.3-6.2 4.5-1 7.7 1.5 7.4 5.8-.2 3.5-1.8 7.7-.5 11.1 1 2.7 3.6 2.8 5 .2 1.6-3.1 0-8.3-.4-11.6-.4-4.2-.2-7 1.8-10.8 0 0-.1.1-.1.2-.2.4-.3.7-.4.8v.1c-.1.2-.1.2 0 0v-.1l.4-.8c0-.1.1-.1.1-.2.2-.4.5-.8.8-1.2V0H0zM282.7 3.4z"></path></svg>';
				break;

			case 'cliff':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 279.24" preserveAspectRatio="none"><path class="shape-divider-fill" d="M1000 0S331.54-4.18 0 279.24h1000z" opacity="0.25"></path><path class="shape-divider-fill" d="M1000 279.24s-339.56-44.3-522.95-109.6S132.86 23.76 0 25.15v254.09z"></path></svg>';
				break;

			case 'zigzag':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 5.8" preserveAspectRatio="none"><path class="shape-divider-fill" d="M5.4.4l5.4 5.3L16.5.4l5.4 5.3L27.5.4 33 5.7 38.6.4l5.5 5.4h.1L49.9.4l5.4 5.3L60.9.4l5.5 5.3L72 .4l5.5 5.3L83.1.4l5.4 5.3L94.1.4l5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3L161 .4l5.4 5.3L172 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3L261 .4l5.4 5.3L272 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3L361 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3L461 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1L550 .4l5.4 5.3L561 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2L650 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2L750 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2L850 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4V0H-.2v5.8z"></path></svg>';
				break;

			case 'illusion':
				shape = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none"><path class="shape-divider-fill" opacity="0.33" d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path><path class="shape-divider-fill" opacity="0.33" d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path><path class="shape-divider-fill" opacity="0.33" d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path><path class="shape-divider-fill" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path></svg>';
				break;

			default:
				shape = '';
				break;

		}

		element.html( shape );
		element.find('svg').addClass( 'op-ts' );

		setTimeout( function(){
			element.find('svg').addClass( 'op-1' );
		}, 500);

	});

};



/*!
 * Theia Sticky Sidebar v1.7.0
 */
!function(){var e=function(t,i){function s(){this.q=[],this.add=function(e){this.q.push(e)};var e,t;this.call=function(){for(e=0,t=this.q.length;e<t;e++)this.q[e].call()}}function o(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t]}function n(e,t){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(t)}else e.resizedAttached=new s,e.resizedAttached.add(t);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var i="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",n="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=i,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+i+'"><div style="'+n+'"></div></div><div class="resize-sensor-shrink" style="'+i+'"><div style="'+n+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),{fixed:1,absolute:1}[o(e,"position")]||(e.style.position="relative");var d,r,l=e.resizeSensor.childNodes[0],c=l.childNodes[0],h=e.resizeSensor.childNodes[1],a=(h.childNodes[0],function(){c.style.width=l.offsetWidth+10+"px",c.style.height=l.offsetHeight+10+"px",l.scrollLeft=l.scrollWidth,l.scrollTop=l.scrollHeight,h.scrollLeft=h.scrollWidth,h.scrollTop=h.scrollHeight,d=e.offsetWidth,r=e.offsetHeight});a();var f=function(){e.resizedAttached&&e.resizedAttached.call()},u=function(e,t,i){e.attachEvent?e.attachEvent("on"+t,i):e.addEventListener(t,i)},p=function(){e.offsetWidth==d&&e.offsetHeight==r||f(),a()};u(l,"scroll",p),u(h,"scroll",p)}var d=Object.prototype.toString.call(t),r="[object Array]"===d||"[object NodeList]"===d||"[object HTMLCollection]"===d||"undefined"!=typeof jQuery&&t instanceof jQuery||"undefined"!=typeof Elements&&t instanceof Elements;if(r)for(var l=0,c=t.length;l<c;l++)n(t[l],i);else n(t,i);this.detach=function(){if(r)for(var i=0,s=t.length;i<s;i++)e.detach(t[i]);else e.detach(t)}};e.detach=function(e){e.resizeSensor&&(e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)},"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=e:window.ResizeSensor=e}();

window.SEMICOLON_stickySidebarInit = function( $stickySidebar ){

	$stickySidebar = $stickySidebar.filter(':not(.customjs)');

	if( $stickySidebar.length < 1 ){
		return true;
	}

	$stickySidebar.each( function(){
		let element		= $(this),
			elTop		= element.attr('data-offset-top') || 110,
			elBottom	= element.attr('data-offset-bottom') || 50;

		element.scwStickySidebar({
			additionalMarginTop: Number( elTop ),
			additionalMarginBottom: Number( elBottom )
		});
	});

};



window.scwSubscribeFormPlugin = window.scwSubscribeFormPlugin || {};

window.SEMICOLON_subscribeFormInit = function( $subscribeForm ){

	$subscribeForm = $subscribeForm.filter(':not(.customjs)');

	if( $subscribeForm.length < 1 ){
		return true;
	}

	$subscribeForm.each( function(){
		let element = $(this),
			elAlert = element.attr('data-alert-type'),
			elLoader = element.attr('data-loader'),
			elResult = element.find('.widget-subscribe-form-result'),
			elRedirect = element.attr('data-redirect'),
			defButton, defButtonText, alertType;

		element.find('form').validate({
			submitHandler: function(form) {

				elResult.hide();

				if( elLoader == 'button' ) {
					defButton = $(form).find('button');
					defButtonText = defButton.html();

					defButton.html('<i class="icon-line-loader icon-spin nomargin"></i>');
				} else {
					$(form).find('.icon-email2').removeClass('icon-email2').addClass('icon-line-loader icon-spin');
				}

				$(form).ajaxSubmit({
					target: elResult,
					dataType: 'json',
					resetForm: true,
					success: function( data ) {
						if( elLoader == 'button' ) {
							defButton.html( defButtonText );
						} else {
							$(form).find('.icon-line-loader').removeClass('icon-line-loader icon-spin').addClass('icon-email2');
						}
						if( data.alert != 'error' && elRedirect ){
							window.location.replace( elRedirect );
							return true;
						}
						if( elAlert == 'inline' ) {
							if( data.alert == 'error' ) {
								alertType = 'alert-danger';
							} else {
								alertType = 'alert-success';
							}

							elResult.addClass( 'alert ' + alertType ).html( data.message ).slideDown( 400 );
						} else {
							elResult.attr( 'data-notify-type', data.alert ).attr( 'data-notify-msg', data.message ).html('');
							SEMICOLON.widget.notifications({ el: elResult });
						}
					}
				});
			}
		});

	});

};



/**
 * Swiper 5.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 20, 2020
 */

window.SEMICOLON_swiperInit = function( $sliderEl ){

	$sliderEl = $sliderEl.filter(':not(.customjs)');

	if( $sliderEl.length < 1 ){
		return true;
	}

	$sliderEl.each( function(){
		if( !$(this).hasClass('swiper_wrapper') ) {
			 return true;
		}

		if( $(this).find('.swiper-slide').length < 1 ) {
			return true;
		}

		let element				= $(this).filter('.swiper_wrapper'),
			elDirection			= element.attr('data-direction') || 'horizontal',
			elSpeed				= element.attr('data-speed') || 300,
			elAutoPlay			= element.attr('data-autoplay'),
			elLoop				= element.attr('data-loop'),
			elStart				= element.attr('data-start') || 1,
			elEffect			= element.attr('data-effect') || 'slide',
			elGrabCursor		= element.attr('data-grab'),
			elParallax			= element.attr('data-parallax'),
			slideNumberTotal	= element.find('.slide-number-total'),
			slideNumberCurrent	= element.find('.slide-number-current'),
			elVideoAutoPlay		= element.attr('data-video-autoplay'),
			elSettings			= element.attr('data-settings'),
			elPagination, elPaginationClickable;

		if( elAutoPlay ) { elAutoPlay = Number( elAutoPlay ); } else { elAutoPlay = 999999999; }
		if( elLoop == 'true' ) { elLoop = true; } else { elLoop = false; }
		if( elParallax == 'true' ) { elParallax = true; } else { elParallax = false; }
		if( elGrabCursor == 'false' ) { elGrabCursor = false; } else { elGrabCursor = true; }
		if( elVideoAutoPlay == 'false' ) { elVideoAutoPlay = false; } else { elVideoAutoPlay = true; }

		if( elStart === 'random' ) {
			elStart = Math.floor( Math.random() * element.find('.swiper-slide:not(.swiper-slide-duplicate)').length );
		} else {
			elStart = Number( elStart ) - 1;
		}

		console.log( elStart );

		if( element.find('.swiper-pagination').length > 0 ) {
			elPagination = element.find('.swiper-pagination');
			elPaginationClickable = true;
		} else {
			elPagination = '';
			elPaginationClickable = false;
		}

		let elementNavNext = element.find('.slider-arrow-right'),
			elementNavPrev = element.find('.slider-arrow-left'),
			elementScollBar = element.find('.swiper-scrollbar');

		window.scwSwiperSlider = new Swiper( element.find('.swiper-parent') ,{
			direction: elDirection,
			speed: Number( elSpeed ),
			autoplay: {
				delay: elAutoPlay
			},
			loop: elLoop,
			initialSlide: elStart,
			effect: elEffect,
			parallax: elParallax,
			slidesPerView: 1,
			grabCursor: elGrabCursor,
			pagination: {
				el: elPagination,
				clickable: elPaginationClickable
			},
			navigation: {
				prevEl: elementNavPrev,
				nextEl: elementNavNext
			},
			scrollbar: {
				el: elementScollBar
			},
			on: {
				init: function(swiper){
					SEMICOLON.slider.sliderDimensions();
					element.find('.yt-bg-player').attr('data-autoplay', 'false').removeClass('customjs');
					SEMICOLON.widget.youtubeBgVideo();
					$('.swiper-slide-active [data-animate]').each(function(){
						let $toAnimateElement = $(this),
							toAnimateDelay = $toAnimateElement.attr('data-delay'),
							toAnimateDelayTime = 0;
						if( toAnimateDelay ) { toAnimateDelayTime = Number( toAnimateDelay ) + 750; } else { toAnimateDelayTime = 750; }
						if( !$toAnimateElement.hasClass('animated') ) {
							$toAnimateElement.addClass('not-animated');
							let elementAnimation = $toAnimateElement.attr('data-animate');
							setTimeout(function() {
								$toAnimateElement.removeClass('not-animated').addClass( elementAnimation + ' animated');
							}, toAnimateDelayTime);
						}
					});
					element.find('[data-animate]').each(function(){
						let $toAnimateElement = $(this),
							elementAnimation = $toAnimateElement.attr('data-animate');
						if( $toAnimateElement.parents('.swiper-slide').hasClass('swiper-slide-active') ) { return true; }
						$toAnimateElement.removeClass('animated').removeClass(elementAnimation).addClass('not-animated');
					});
					SEMICOLON.slider.swiperSliderMenu();
				},
				transitionStart: function(swiper){
					if( slideNumberCurrent.length > 0 ){
						if( elLoop == true ) {
							slideNumberCurrent.html( Number( element.find('.swiper-slide.swiper-slide-active').attr('data-swiper-slide-index') ) + 1 );
						} else {
							slideNumberCurrent.html( scwSwiperSlider.activeIndex + 1 );
						}
					}
					element.find('[data-animate]').each(function(){
						let $toAnimateElement = $(this),
							elementAnimation = $toAnimateElement.attr('data-animate');
						if( $toAnimateElement.parents('.swiper-slide').hasClass('swiper-slide-active') ) { return true; }
						$toAnimateElement.removeClass('animated').removeClass(elementAnimation).addClass('not-animated');
					});
					SEMICOLON.slider.swiperSliderMenu();
				},
				transitionEnd: function(swiper){
					element.find('.swiper-slide').each(function(){
						let slideEl = $(this);
						if( slideEl.find('video').length > 0 && elVideoAutoPlay == true ) {
							slideEl.find('video').get(0).pause();
						}
						if( slideEl.find('.yt-bg-player.mb_YTPlayer:not(.customjs)').length > 0 ) {
							slideEl.find('.yt-bg-player.mb_YTPlayer:not(.customjs)').YTPPause();
						}
					});
					element.find('.swiper-slide:not(".swiper-slide-active")').each(function(){
						let slideEl = $(this);
						if( slideEl.find('video').length > 0 ) {
							if( slideEl.find('video').get(0).currentTime != 0 ) {
								slideEl.find('video').get(0).currentTime = 0;
							}
						}
						if( slideEl.find('.yt-bg-player.mb_YTPlayer:not(.customjs)').length > 0 ) {
							slideEl.find('.yt-bg-player.mb_YTPlayer:not(.customjs)').YTPSeekTo( slideEl.find('.yt-bg-player.mb_YTPlayer:not(.customjs)').attr('data-start') );
						}
					});
					if( element.find('.swiper-slide.swiper-slide-active').find('video').length > 0 && elVideoAutoPlay == true ) {
						element.find('.swiper-slide.swiper-slide-active').find('video').get(0).play();
					}
					if( element.find('.swiper-slide.swiper-slide-active').find('.yt-bg-player.mb_YTPlayer:not(.customjs)').length > 0 && elVideoAutoPlay == true ) {
						element.find('.swiper-slide.swiper-slide-active').find('.yt-bg-player.mb_YTPlayer:not(.customjs)').YTPPlay();
					}

					element.find('.swiper-slide.swiper-slide-active [data-animate]').each(function(){
						let $toAnimateElement = $(this),
							toAnimateDelay = $toAnimateElement.attr('data-delay'),
							toAnimateDelayTime = 0;
						if( toAnimateDelay ) { toAnimateDelayTime = Number( toAnimateDelay ) + 300; } else { toAnimateDelayTime = 300; }
						if( !$toAnimateElement.hasClass('animated') ) {
							$toAnimateElement.addClass('not-animated');
							let elementAnimation = $toAnimateElement.attr('data-animate');
							setTimeout(function() {
								$toAnimateElement.removeClass('not-animated').addClass( elementAnimation + ' animated');
							}, toAnimateDelayTime);
						}
					});
				}
			}
		});

		if( slideNumberCurrent.length > 0 ) {
			if( elLoop == true ) {
				slideNumberCurrent.html( scwSwiperSlider.realIndex + 1 );
			} else {
				slideNumberCurrent.html( scwSwiperSlider.activeIndex + 1 );
			}
		}

		if( slideNumberTotal.length > 0 ) {
			slideNumberTotal.html( element.find('.swiper-slide:not(.swiper-slide-duplicate)').length );
		}

		if( elSettings ){
			elSettings = Function( 'return ' + elSettings )();
			Object.keys(elSettings).forEach( function( key, index ){
				scwSwiperSlider.params[key] = elSettings[key];
				scwSwiperSlider.update();
			});
		}
	});

};



/*! jQuery UI - v1.12.1 - 2018-01-02
* http://jqueryui.com
* Includes: widget.js, keycode.js, unique-id.js, widgets/tabs.js, effect.js, effects/effect-fade.js, effects/effect-slide.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

window.SEMICOLON_tabsInit = function( $tabsEl ){

	$tabsEl = $tabsEl.filter(':not(.customjs)');

	if( $tabsEl.length < 1 ){
		return true;
	}

	$tabsEl.each( function(){
		let element		= $(this),
			elAction	= element.attr('data-action') || 'click',
			elSpeed		= element.attr('data-speed') || 400,
			elActive	= element.attr('data-active') || 1;

		elActive = elActive - 1;

		let windowHash = window.location.hash;
		if( $(windowHash).length > 0 && element.find(windowHash).length > 0 ) {
			elActive = $( windowHash ).index();
		}

		element.tabs({
			event: elAction,
			active: Number(elActive),
			show: {
				effect: 'fade',
				duration: Number(elSpeed)
			},
			activate: function( event, ui ) {
				$(ui.newPanel).find( '.flexslider .slide' ).resize();
			}
		});

		SEMICOLON_tabsResponsive( element );
		SEMICOLON_tabsResponsiveResizeInit( element );

		let resizeTimer;

		$(window).on( 'resize', function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				SEMICOLON_tabsResponsiveResizeInit( element );
			}, 250);
		});
	});

};

window.SEMICOLON_tabsResponsive = function( $tabsEl ){

	$tabsEl = $tabsEl.filter('.tabs-responsive');

	if( $tabsEl.length < 1 ){
		return true;
	}

	$tabsEl.each( function(){
		let element = $(this),
			elementNav = element.find('.tab-nav'),
			elementContent = element.find('.tab-container');

		elementNav.children('li').each( function(){
			let navEl = $(this),
				navElAnchor = navEl.children('a'),
				navElTarget = navElAnchor.attr('href'),
				navElContent = navElAnchor.html();

			elementContent.find(navElTarget).before('<div class="accordion-header d-none"><div class="accordion-icon"><i class="accordion-closed icon-ok-circle"></i><i class="accordion-open icon-remove-circle"></i></div><div class="accordion-title">'+navElContent+'</div></div>');
		});
	});
};

window.SEMICOLON_tabsResponsiveResizeInit = function( $tabsEl ){

	$tabsEl = $tabsEl.filter('.tabs-responsive');

	if( $tabsEl.length < 1 ){
		return true;
	}

	$tabsEl.each( function(){
		let element = $(this),
			elActive = element.tabs( 'option', 'active' ) + 1,
			elementAccStyle = element.attr('data-accordion-style');

		if( $('body').hasClass('device-sm') || $('body').hasClass('device-xs') ) {

			element.find('.tab-nav').addClass('d-none');
			element.find('.tab-container').addClass( 'accordion '+ elementAccStyle ).attr('data-active', elActive);
			element.find('.tab-content').addClass('accordion-content');
			element.find('.accordion-header').removeClass('d-none');
			SEMICOLON.widget.accordions({ 'parent': element });

		} else if( $('body').hasClass('device-md') || $('body').hasClass('device-lg') || $('body').hasClass('device-xl') ) {

			element.find('.tab-nav').removeClass('d-none');
			element.find('.tab-container').removeClass( 'accordion '+ elementAccStyle ).attr('data-active', '');
			elActive = element.find('.acctitlec').next('.tab-content').index();
			element.find('.tab-content').removeClass('accordion-content');
			element.find('.accordion-header').addClass('d-none');
			element.tabs('refresh');
			if( elActive > 0 ) {
				element.tabs( 'option', 'active', ( ( elActive - 1 ) / 2 ) );
			}

		}
	});
};



/*! Morphext - v2.4.7 - 2016-11-04 */

window.SEMICOLON_textRotatorInit = function( $textRotatorEl ){

	$textRotatorEl = $textRotatorEl.filter(':not(.customjs)');

	if( $textRotatorEl.length < 1 ){
		return true;
	}

	$textRotatorEl.each(function(){
		let element = $(this),
			elRotator = element.find('.t-rotate'),
			elAnimation = element.attr('data-rotate') || 'fade',
			elSpeed = element.attr('data-speed') || 1200,
			elSep = element.attr('data-separator') || ',';

		let pluginData = elRotator.Morphext({
			animation: elAnimation,
			separator: elSep,
			speed: Number(elSpeed)
		});
	});

};



window.scwTogglesPlugin = window.scwTogglesPlugin || {};

window.SEMICOLON_togglesInit = function( $toggleEl ){

	$toggleEl = $toggleEl.filter(':not(.customjs)');

	if( $toggleEl.length < 1 ){
		return true;
	}

	$toggleEl.each( function(){
		let element = $(this),
			elSpeed = element.attr('data-speed') || 300,
			elState = element.attr('data-state');

		if( elState != 'open' ){
			element.find('.toggle-content').hide();
		} else {
			element.addClass('toggle-active').find('.toggle-content').slideDown( Number(elSpeed) );
		}

		element.find('.toggle-header').off( 'click' ).on( 'click', function(){
			element.toggleClass('toggle-active').find('.toggle-content').slideToggle( Number(elSpeed) );
			return true;
		});
	});

};



/**
 * Twitter Feed Fetcher
 */

function sm_format_twitter(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
	var username = twitters[i].user.screen_name;
	var name = twitters[i].user.name;
	var username_avatar = twitters[i].user.profile_image_url_https;
	var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
	  return '<a href="'+url+'" target="_blank">'+url+'</a>';
	}).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
	  return  reply.charAt(0)+'<a href="https://twitter.com/'+reply.substring(1)+'" target="_blank">'+reply.substring(1)+'</a>';
	});
	statusHTML.push('<li><i class="icon-twitter"></i><a href="https://twitter.com/'+username+'" class="twitter-avatar" target="_blank"><img src="'+username_avatar+'" alt="'+name+'" title="'+name+'"></a><span>'+status+'</span><small><a href="https://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'" target="_blank">'+relative_time(twitters[i].created_at)+'</a></small></li>');
  }
  return statusHTML.join('');
}

function sm_format_twitter2(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
	var username = twitters[i].user.screen_name;
	var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
	  return '<a href="'+url+'" target="_blank">'+url+'</a>';
	}).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
	  return  reply.charAt(0)+'<a href="https://twitter.com/'+reply.substring(1)+'" target="_blank">'+reply.substring(1)+'</a>';
	});
	statusHTML.push('<div class="slide"><span>'+status+'</span><small><a href="https://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'" target="_blank">'+relative_time(twitters[i].created_at)+'</a></small></div>');
  }
  return statusHTML.join('');
}

function sm_format_twitter3(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
	var username = twitters[i].user.screen_name;
	var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
	  return '<a href="'+url+'" target="_blank">'+url+'</a>';
	}).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
	  return  reply.charAt(0)+'<a href="https://twitter.com/'+reply.substring(1)+'" target="_blank">'+reply.substring(1)+'</a>';
	});
	statusHTML.push('<div class="slide"><div class="testi-content"><p>'+status+'</p><div class="testi-meta"><span><a href="https://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'" target="_blank">'+relative_time(twitters[i].created_at)+'</a></span></div></div></div>');
  }
  return statusHTML.join('');
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  if (delta < 60) {
	return 'less than a minute ago';
  } else if(delta < 120) {
	return 'about a minute ago';
  } else if(delta < (60*60)) {
	return (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (120*60)) {
	return 'about an hour ago';
  } else if(delta < (24*60*60)) {
	return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
	return '1 day ago';
  } else {
	return (parseInt(delta / 86400)).toString() + ' days ago';
  }
}

window.SEMICOLON_twitterFeedInit = function( $twitterFeedEl ){

	if( $twitterFeedEl.length < 1 ){
		return true;
	}

	$twitterFeedEl.each(function() {
		let element		= $(this),
			elUser		= element.attr('data-username') || 'twitter',
			elCount		= element.attr('data-count') || 3,
			elLoader	= element.attr('data-loader') || 'include/twitter/tweets.php';

		$.getJSON( elLoader + '?username='+ elUser +'&count='+ Number( elCount ), function(tweets){
			if( element.hasClass('fslider') ) {
				element.find(".slider-wrap").html(sm_format_twitter3(tweets)).promise().done( function(){
					let timer = setInterval(function(){
						if( element.find('.slide').length > 1 ) {
							element.removeClass('customjs');
							setTimeout( function(){ SEMICOLON.widget.loadFlexSlider(); }, 500);
							clearInterval(timer);
						}
					}, 500);
				});
			} else {
				element.html(sm_format_twitter(tweets));
			}
		});
	});

};



/*jquery.mb.YTPlayer 11-06-2020
 _ jquery.mb.components
 _ email: matbicoc@gmail.com
 _ Copyright (c) 2001-2020. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */


window.SEMICOLON_youtubeBgVideoInit = function( $youtubeBgPlayerEl ){

	$youtubeBgPlayerEl = $youtubeBgPlayerEl.filter(':not(.mb_YTPlayer,.customjs)');

	if( $youtubeBgPlayerEl.length < 1 ){
		return true;
	}

	$youtubeBgPlayerEl.each( function(){

		let element			= $(this),
			elVideo			= element.attr('data-video'),
			elMute			= element.attr('data-mute') || true,
			elRatio			= element.attr('data-ratio') || '16/9',
			elQuality		= element.attr('data-quality') || 'hd720',
			elOpacity		= element.attr('data-opacity') || 1,
			elContainer		= element.attr('data-container') || 'parent',
			elOptimize		= element.attr('data-optimize') || true,
			elLoop			= element.attr('data-loop') || true,
			elControls		= element.attr('data-controls') || false,
			elVolume		= element.attr('data-volume') || 50,
			elStart			= element.attr('data-start') || 0,
			elStop			= element.attr('data-stop') || 0,
			elAutoPlay		= element.attr('data-autoplay') || true,
			elFullScreen	= element.attr('data-fullscreen') || false;

		if( elMute == 'false' ) {
			elMute = false;
		}

		if( elContainer == 'parent' ) {
			let parent = element.parent();
			if( parent.attr('id') ) {
				elContainer = '#' + parent.attr('id');
			} else {
				let ytPid = 'yt-bg-player-parent-' + Math.floor( Math.random() * 10000 );
				parent.attr( 'id', ytPid );
				elContainer = '#' + ytPid;
			}
		}

		if( elOptimize == 'false' ) {
			elOptimize = false;
		}

		if( elLoop == 'false' ) {
			elLoop = false;
		}

		if( elControls == 'true' ) {
			elControls = true;
		}

		if( elAutoPlay == 'false' ) {
			elAutoPlay = false;
		}

		if( elFullScreen == 'true' ) {
			elFullScreen = true;
		}

		element.YTPlayer({
			videoURL: elVideo,
			mute: elMute,
			ratio: elRatio,
			quality: elQuality,
			opacity: Number(elOpacity),
			containment: elContainer,
			optimizeDisplay: elOptimize,
			loop: elLoop,
			vol: Number(elVolume),
			startAt: Number(elStart),
			stopAt: Number(elStop),
			autoPlay: elAutoPlay,
			realfullscreen: elFullScreen,
			showYTLogo: false,
			showControls: false
		});

	});

};
