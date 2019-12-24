(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cpp'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    } else {\n        // Tulis kode Anda di bagian ini untuk subtask-subtask lainnya.\n    }\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(data && data.index),0,{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "(header["
    + alias4(((helper = (helper = helpers.testcase || (depth0 != null ? depth0.testcase : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"testcase","hash":{},"data":data}) : helper)))
    + "] == '"
    + alias4(((helper = (helper = helpers.testcase || (depth0 != null ? depth0.testcase : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"testcase","hash":{},"data":data}) : helper)))
    + "') {\n        scanf(\"%d\",&N); // "
    + ((stack1 = ((helper = (helper = helpers.begin || (depth0 != null ? depth0.begin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"begin","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        \n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.middle : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        printf(\"JAWAB\\n\");\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.end : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        fflush(stdout);\n        \n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    } else if ";
},"5":function(container,depth0,helpers,partials,data) {
    return "\n    if ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "        printf(\""
    + ((stack1 = ((helper = (helper = helpers.output || (depth0 != null ? depth0.output : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"output","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\\n\");\n        fflush(stdout);\n        scanf(\"%s\", grader); // "
    + ((stack1 = ((helper = (helper = helpers.input || (depth0 != null ? depth0.input : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"input","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        \n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        printf(\""
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\\n\");\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "    // Tulis kode Anda di bagian ini untuk subtask-subtask lainnya.\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "#include <cstdio>\n\nint N, K;\nchar header[20], grader[20];\n\nint main() {\n    scanf(\"%s\", header);\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.length : stack1),0,{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "}";
},"useData":true});
templates['pascal'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    end else begin\n        // Tulis kode Anda di bagian ini untuk subtask-subtask lainnya.\n    end;\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || alias2).call(alias1,(data && data.index),0,{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "(header["
    + alias3((helpers.add || (depth0 && depth0.add) || alias2).call(alias1,(depth0 != null ? depth0.testcase : depth0),1,{"name":"add","hash":{},"data":data}))
    + "] = '"
    + alias3(((helper = (helper = helpers.testcase || (depth0 != null ? depth0.testcase : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"testcase","hash":{},"data":data}) : helper)))
    + "') then begin\n        readln(N); // "
    + ((stack1 = ((helper = (helper = helpers.begin || (depth0 != null ? depth0.begin : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"begin","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        \n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.middle : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        writeln('JAWAB');\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.end : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        flush(output);\n        \n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    end else if ";
},"5":function(container,depth0,helpers,partials,data) {
    return "\n    if ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "        writeln('"
    + ((stack1 = ((helper = (helper = helpers.output || (depth0 != null ? depth0.output : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"output","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "');\n        flush(output);\n        readln(grader); // "
    + ((stack1 = ((helper = (helper = helpers.input || (depth0 != null ? depth0.input : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"input","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        \n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        writeln('"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "');\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "    // Tulis kode Anda di bagian ini untuk subtask-subtask lainnya.\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "var\n    N, K: integer;\n    header, grader: string;\n\nbegin\n    readln(header);\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.ne || (depth0 && depth0.ne) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.length : stack1),0,{"name":"ne","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "end.";
},"useData":true});
})();