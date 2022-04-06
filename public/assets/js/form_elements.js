/* ============================================================
 * Form Elements
 * This file applies various jQuery plugins to form elements
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
(function($) {

    'use strict';

    var getBaseURL = function() {
        var url = document.URL;
        return url.substr(0, url.lastIndexOf('/'));
    }

    $(document).ready(function() {

        //Multiselect - Select2 plug-in
        $("#multi").val(["Jim", "Lucy"]).select2();

        //Date Pickers
          $('#datepicker-range, #datepicker-component, #datepicker-component2').datepicker();

        $( ".datepicker" ).datepicker({ format: 'dd-M-yyyy', autoclose: true }).on('show', function(e){
            if ( e.date ) {
                $(this).data('stickyDate', e.date);
            } else if($(this).val()){
                /**auto-populate existing selection*/
                $(this).data('stickyDate', new Date($(this).val()));
                $(this).datepicker('setDate', new Date($(this).val()));
            } else {
                $(this).data('stickyDate', null);
            }
        }).on('hide', function(e){
            var stickyDate = $(this).data('stickyDate');
            if ( !e.date && stickyDate ) {
                $(this).datepicker('setDate', stickyDate);
                $(this).data('stickyDate', null);
            }
        });

        $('#datepicker-embeded').datepicker({
            daysOfWeekDisabled: "0,1"
        });


        //Typehead Sample Code
        
        function toTimestamp(strDate){
            var datum = Date.parse(strDate);
            return datum/1000;
           }

        $('.dr-picker').daterangepicker({
            timePicker: false,
            timePickerIncrement: 30,
            format: 'DD-MMM-YYYY'
        }, function(start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });
         $('.dr-pickertime').daterangepicker({
            timePicker: true,
            timePickerIncrement: 1,
            format: 'YYYY-MM-DD HH:mm:ss'
        }, function(start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });
         $('.dr-pickermonthrange').daterangepicker({
            timePicker: false, 
            timePickerIncrement: 30,
            format: 'DD-MMM-YYYY'
        }, function(start, end, label) {
            start=new Date(start);
            end=new Date(end);
            var one_day = 1000 * 60 * 60 * 24; 
            var Result = Math.round(end.getTime() - start.getTime()) / (one_day); 
            var Final_Result = Result.toFixed(0); 
            if(Final_Result>31)
            {
                swal('Can not select more than 31 days');
                $('.dr-pickermonthrange').val(''); 
            }
           
        });
         $('.dr-pickerhalfmonthrange').daterangepicker({
            timePicker: false, 
            timePickerIncrement: 30,
            format: 'DD-MMM-YYYY'
        }, function(start, end, label) {
            start=new Date(start);
            end=new Date(end);
            var one_day = 1000 * 60 * 60 * 24; 
            var Result = Math.round(end.getTime() - start.getTime()) / (one_day); 
            var Final_Result = Result.toFixed(0); 
            if(Final_Result>15)
            {
                swal('Can not select more than 15 days');
                $('.dr-pickerhalfmonthrange').val(''); 
            }
           
        });

        /* Time picker
         * https://github.com/m3wolf/bootstrap3-timepicker
         */
        $('#timepicker').timepicker().on('show.timepicker', function(e) {
            var widget = $('.bootstrap-timepicker-widget');
            widget.find('.glyphicon-chevron-up').removeClass().addClass('pg-arrow_maximize');
            widget.find('.glyphicon-chevron-down').removeClass().addClass('pg-arrow_minimize');
        });



        // disabling dates
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

        //Input mask - Input helper
        $(function($) {
            $("#date").mask("99/99/9999");
            $("#phone").mask("(999) 999-9999");
            $("#tin").mask("99-9999999");
            $("#ssn").mask("999-99-9999");
        });

        //Autonumeric plug-in - automatic addition of dollar signs,etc controlled by tag attributes
       // $('.autonumeric').autoNumeric('init');

        //Drag n Drop up-loader
        $("div#myId").dropzone({
            url: "/file/post"
        });
        //Single instance of tag inputs - can be initiated with simply using data-role="tagsinput" attribute in any input field
        $('.custom-tag-input').tagsinput({

        });

        var myCustomTemplates = {
                "font-styles": function(locale) {
                    return '<li class="dropdown">' + '<a data-toggle="dropdown" class="btn btn-default dropdown-toggle ">' + '<span class="editor-icon editor-icon-headline"></span>' + '<span class="current-font">Normal</span>' + '<b class="caret"></b>' + '</a>' + '<ul class="dropdown-menu">' + '<li><a tabindex="-1" data-wysihtml5-command-value="p" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">Normal</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h1" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">1</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h2" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">2</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h3" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">3</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h4" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">4</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h5" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">5</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h6" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">6</a></li>' + '</ul>' + '</li>';
                },
                emphasis: function(locale) {
                    return '<li>' + '<div class="btn-group">' + '<a tabindex="-1" title="CTRL+B" data-wysihtml5-command="bold" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-bold"></i></a>' + '<a tabindex="-1" title="CTRL+I" data-wysihtml5-command="italic" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-italic"></i></a>' + '<a tabindex="-1" title="CTRL+U" data-wysihtml5-command="underline" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-underline"></i></a>' + '</div>' + '</li>';
                },
                blockquote: function(locale) {
                    return '<li>' + '<a tabindex="-1" data-wysihtml5-display-format-name="false" data-wysihtml5-command-value="blockquote" data-wysihtml5-command="formatBlock" class="btn  btn-default" href="javascript:;" unselectable="on">' + '<i class="editor-icon editor-icon-quote"></i>' + '</a>' + '</li>'
                },
                lists: function(locale) {
                    return '<li>' + '<div class="btn-group">' + '<a tabindex="-1" title="Unordered list" data-wysihtml5-command="insertUnorderedList" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-ul"></i></a>' + '<a tabindex="-1" title="Ordered list" data-wysihtml5-command="insertOrderedList" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-ol"></i></a>' + '<a tabindex="-1" title="Outdent" data-wysihtml5-command="Outdent" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-outdent"></i></a>' + '<a tabindex="-1" title="Indent" data-wysihtml5-command="Indent" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-indent"></i></a>' + '</div>' + '</li>'
                },
                image: function(locale) {
                    return '<li>' + '<div class="bootstrap-wysihtml5-insert-image-modal modal fade">' + '<div class="modal-dialog ">' + '<div class="modal-content">' + '<div class="modal-header">' + '<a data-dismiss="modal" class="close">×</a>' + '<h3>Insert image</h3>' + '</div>' + '<div class="modal-body">' + '<input class="bootstrap-wysihtml5-insert-image-url form-control" value="http://">' + '</div>' + '<div class="modal-footer">' + '<a data-dismiss="modal" class="btn btn-default">Cancel</a>' + '<a data-dismiss="modal" class="btn btn-primary">Insert image</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '<a tabindex="-1" title="Insert image" data-wysihtml5-command="insertImage" class="btn  btn-default" href="javascript:;" unselectable="on">' + '<i class="editor-icon editor-icon-image"></i>' + '</a>' + '</li>'
                },
                link: function(locale) {
                    return '<li>' + '<div class="bootstrap-wysihtml5-insert-link-modal modal fade">' + '<div class="modal-dialog ">' + '<div class="modal-content">' + '<div class="modal-header">' + '<a data-dismiss="modal" class="close">×</a>' + '<h3>Insert link</h3>' + '</div>' + '<div class="modal-body">' + '<input class="bootstrap-wysihtml5-insert-link-url form-control" value="http://">' + '<label class="checkbox"> <input type="checkbox" checked="" class="bootstrap-wysihtml5-insert-link-target">Open link in new window</label>' + '</div>' + '<div class="modal-footer">' + '<a data-dismiss="modal" class="btn btn-default">Cancel</a>' + '<a data-dismiss="modal" class="btn btn-primary" href="#">Insert link</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '<a tabindex="-1" title="Insert link" data-wysihtml5-command="createLink" class="btn  btn-default" href="javascript:;" unselectable="on">' + '<i class="editor-icon editor-icon-link"></i>' + '</a>' + '</li>'
                },
                html: function(locale) {
                    return '<li>' + '<div class="btn-group">' + '<a tabindex="-1" title="Edit HTML" data-wysihtml5-action="change_view" class="btn  btn-default" href="javascript:;" unselectable="on">' + '<i class="editor-icon editor-icon-html"></i>' + '</a>' + '</div>' + '</li>'
                }
            }
        
        //TODO: chrome doesn't apply the plugin on load
        // setTimeout(function() {
        //     $('#wysiwyg5').wysihtml5({
        //         html: true,
        //         stylesheets: ["pages/css/editor.css"],
        //         customTemplates: myCustomTemplates
        //     });
        // }, 500);


        $('#summernote').summernote({
            height: 200,
            onfocus: function(e) {
                $('body').addClass('overlay-disabled');
            },
            onblur: function(e) {
                $('body').removeClass('overlay-disabled');
            }
        });


    });

})(window.jQuery);