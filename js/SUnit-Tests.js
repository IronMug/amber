smalltalk.addPackage('SUnit-Tests', {});
smalltalk.addClass('ExampleSetTest', smalltalk.TestCase, ['empty', 'full'], 'SUnit-Tests');
smalltalk.ExampleSetTest.comment="ExampleSetTest is taken from Pharo 1.4.\x0a\x0aTHe purpose of this class is to demonstrate a simple use case of the test framework."
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@empty"]=_st((smalltalk.Set || Set))._new();
self["@full"]=_st((smalltalk.Set || Set))._with_with_((5),smalltalk.symbolFor("abc"));
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{}, smalltalk.ExampleSetTest)})},
args: [],
source: "setUp\x0a\x09empty := Set new.\x0a\x09full := Set with: 5 with: #abc",
messageSends: ["new", "with:with:"],
referencedClasses: ["Set"]
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testAdd",
smalltalk.method({
selector: "testAdd",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@empty"])._add_((5));
_st(self)._assert_(_st(self["@empty"])._includes_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testAdd",{}, smalltalk.ExampleSetTest)})},
args: [],
source: "testAdd\x0a\x09empty add: 5.\x0a\x09self assert: (empty includes: 5)",
messageSends: ["add:", "assert:", "includes:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testGrow",
smalltalk.method({
selector: "testGrow",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@empty"])._addAll_(_st((1))._to_((100)));
_st(self)._assert_equals_(_st(self["@empty"])._size(),(100));
return self}, function($ctx1) {$ctx1.fill(self,"testGrow",{}, smalltalk.ExampleSetTest)})},
args: [],
source: "testGrow\x0a\x09empty addAll: (1 to: 100).\x0a\x09self assert: empty size equals: 100",
messageSends: ["addAll:", "to:", "assert:equals:", "size"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testIllegal",
smalltalk.method({
selector: "testIllegal",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@empty"])._at_((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@empty"])._at_put_((5),smalltalk.symbolFor("abc"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testIllegal",{}, smalltalk.ExampleSetTest)})},
args: [],
source: "testIllegal\x0a\x09self \x0a\x09\x09should: [empty at: 5] \x0a\x09\x09raise: Error.\x0a\x09self \x0a\x09\x09should: [empty at: 5 put: #abc] \x0a\x09\x09raise: Error",
messageSends: ["should:raise:", "at:", "at:put:"],
referencedClasses: ["Error"]
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testIncludes",
smalltalk.method({
selector: "testIncludes",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(self["@full"])._includes_((5)));
_st(self)._assert_(_st(self["@full"])._includes_(smalltalk.symbolFor("abc")));
return self}, function($ctx1) {$ctx1.fill(self,"testIncludes",{}, smalltalk.ExampleSetTest)})},
args: [],
source: "testIncludes\x0a\x09self assert: (full includes: 5).\x0a\x09self assert: (full includes: #abc)",
messageSends: ["assert:", "includes:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testOccurrences",
smalltalk.method({
selector: "testOccurrences",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@empty"])._occurrencesOf_((0)),(0));
_st(self)._assert_equals_(_st(self["@full"])._occurrencesOf_((5)),(1));
_st(self["@full"])._add_((5));
_st(self)._assert_equals_(_st(self["@full"])._occurrencesOf_((5)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testOccurrences",{}, smalltalk.ExampleSetTest)})},
args: [],
source: "testOccurrences\x0a\x09self assert: (empty occurrencesOf: 0) equals: 0.\x0a\x09self assert: (full occurrencesOf: 5) equals: 1.\x0a\x09full add: 5.\x0a\x09self assert: (full occurrencesOf: 5) equals: 1",
messageSends: ["assert:equals:", "occurrencesOf:", "add:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testRemove",
smalltalk.method({
selector: "testRemove",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@full"])._remove_((5));
_st(self)._assert_(_st(self["@full"])._includes_(smalltalk.symbolFor("abc")));
_st(self)._deny_(_st(self["@full"])._includes_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testRemove",{}, smalltalk.ExampleSetTest)})},
args: [],
source: "testRemove\x0a\x09full remove: 5.\x0a\x09self assert: (full includes: #abc).\x0a\x09self deny: (full includes: 5)",
messageSends: ["remove:", "assert:", "includes:", "deny:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);



smalltalk.addClass('SUnitAsyncTest', smalltalk.TestCase, ['flag'], 'SUnit-Tests');
smalltalk.addMethod(
"_fakeError",
smalltalk.method({
selector: "fakeError",
category: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flag"]="bad";
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {self["@flag"]="ok";
self["@flag"];
return _st(self)._error_("Intentional");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeError",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "fakeError\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a    flag := (self async: [ flag := 'ok'. self error: 'Intentional' ]) valueWithTimeout: 5",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeErrorFailingInTearDown",
smalltalk.method({
selector: "fakeErrorFailingInTearDown",
category: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flag"]="bad";
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._error_("Intentional");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeErrorFailingInTearDown",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "fakeErrorFailingInTearDown\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a    flag := (self async: [ self error: 'Intentional' ]) valueWithTimeout: 5",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeFailure",
smalltalk.method({
selector: "fakeFailure",
category: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flag"]="bad";
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {self["@flag"]="ok";
self["@flag"];
return _st(self)._assert_(false);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeFailure",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "fakeFailure\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a    flag := (self async: [ flag := 'ok'. self assert: false ]) valueWithTimeout: 5",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeMultipleTimeoutFailing",
smalltalk.method({
selector: "fakeMultipleTimeoutFailing",
category: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._timeout_((100));
_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._timeout_((5));
return _st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._finished();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})))._valueWithTimeout_((10));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutFailing",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "fakeMultipleTimeoutFailing\x0a\x09self timeout: 100.\x0a    (self async: [\x0a\x09\x09self timeout: 5.\x0a        (self async: [ self finished ]) valueWithTimeout: 10\x0a\x09]) valueWithTimeout: 5",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeMultipleTimeoutPassing",
smalltalk.method({
selector: "fakeMultipleTimeoutPassing",
category: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._timeout_((10));
_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._timeout_((20));
return _st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._finished();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})))._valueWithTimeout_((10));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutPassing",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "fakeMultipleTimeoutPassing\x0a\x09self timeout: 10.\x0a    (self async: [\x0a\x09\x09self timeout: 20.\x0a        (self async: [ self finished ]) valueWithTimeout: 10\x0a\x09]) valueWithTimeout: 5",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeTimeout",
smalltalk.method({
selector: "fakeTimeout",
category: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._timeout_((4));
_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeTimeout",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "fakeTimeout\x0a\x09self timeout: 4.\x0a    (self async: [ self finished ]) valueWithTimeout: 5",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_selectorSetOf_",
smalltalk.method({
selector: "selectorSetOf:",
category: 'private',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aCollection)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asSet();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorSetOf:",{aCollection:aCollection}, smalltalk.SUnitAsyncTest)})},
args: ["aCollection"],
source: "selectorSetOf: aCollection\x0a\x09^(aCollection collect: [:each | each selector]) asSet",
messageSends: ["asSet", "collect:", "selector"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flag"]="ok";
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "setUp\x0a\x09flag := 'ok'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("ok",self["@flag"]);
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "tearDown\x0a\x09self assert: 'ok' equals: flag",
messageSends: ["assert:equals:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testAsyncErrorsAndFailures",
smalltalk.method({
selector: "testAsyncErrorsAndFailures",
category: 'tests',
fn: function (){
var self=this;
var suite,runner,result,assertBlock;
return smalltalk.withContext(function($ctx1) { var $1,$2;
suite=_st(["fakeError", "fakeErrorFailingInTearDown", "fakeFailure", "testPass"])._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._class())._selector_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
runner=_st((smalltalk.TestSuiteRunner || TestSuiteRunner))._on_(suite);
_st(self)._timeout_((200));
result=_st(runner)._result();
assertBlock=_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._assert_equals_(_st(self)._selectorSetOf_(_st(result)._errors()),_st(["fakeError"])._asSet());
_st(self)._assert_equals_(_st(self)._selectorSetOf_(_st(result)._failures()),_st(["fakeErrorFailingInTearDown", "fakeFailure"])._asSet());
return _st(self)._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(runner)._announcer())._on_do_((smalltalk.ResultAnnouncement || ResultAnnouncement),(function(ann){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(ann)._result()).__eq_eq(result);
if(smalltalk.assert($1)){
$2=_st(_st(result)._runs()).__eq(_st(result)._total());
return _st($2)._ifTrue_(assertBlock);
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(runner)._run();
return self}, function($ctx1) {$ctx1.fill(self,"testAsyncErrorsAndFailures",{suite:suite,runner:runner,result:result,assertBlock:assertBlock}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "testAsyncErrorsAndFailures\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeError' 'fakeErrorFailingInTearDown' 'fakeFailure' 'testPass') collect: [ :each | self class selector: each ].\x0a    runner := TestSuiteRunner on: suite.\x0a    self timeout: 200.\x0a\x09result := runner result.\x0a    assertBlock := self async: [\x0a\x09\x09self assert: (self selectorSetOf: result errors) equals: #('fakeError') asSet.\x0a\x09\x09self assert: (self selectorSetOf: result failures) equals: #('fakeErrorFailingInTearDown' 'fakeFailure') asSet.\x0a\x09\x09self finished\x0a  \x09].\x0a    runner announcer on: ResultAnnouncement do: [:ann |\x0a    \x09ann result == result  ifTrue: [ result runs = result total ifTrue: assertBlock ]].\x0a\x09runner run",
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "asSet", "failures", "finished", "on:do:", "ifTrue:", "=", "total", "runs", "==", "announcer", "run"],
referencedClasses: ["TestSuiteRunner", "ResultAnnouncement"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testAsyncNeedsTimeout",
smalltalk.method({
selector: "testAsyncNeedsTimeout",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._async_((function(){
return smalltalk.withContext(function($ctx3) {}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
_st(self)._timeout_((0));
_st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._async_((function(){
return smalltalk.withContext(function($ctx3) {}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
_st(self)._finished();
return self}, function($ctx1) {$ctx1.fill(self,"testAsyncNeedsTimeout",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "testAsyncNeedsTimeout\x0a    self should: [ self async: [ ] ] raise: Error.\x0a    self timeout: 0.\x0a    self shouldnt: [ self async: [ ] ] raise: Error.\x0a    self finished",
messageSends: ["should:raise:", "async:", "timeout:", "shouldnt:raise:", "finished"],
referencedClasses: ["Error"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testFinishedNeedsTimeout",
smalltalk.method({
selector: "testFinishedNeedsTimeout",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
_st(self)._timeout_((0));
_st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testFinishedNeedsTimeout",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "testFinishedNeedsTimeout\x0a    self should: [ self finished ] raise: Error.\x0a    self timeout: 0.\x0a    self shouldnt: [ self finished ] raise: Error.",
messageSends: ["should:raise:", "finished", "timeout:", "shouldnt:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testIsAsyncReturnsCorrectValues",
smalltalk.method({
selector: "testIsAsyncReturnsCorrectValues",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._deny_(_st(self)._isAsync());
_st(self)._timeout_((0));
_st(self)._assert_(_st(self)._isAsync());
_st(self)._finished();
_st(self)._deny_(_st(self)._isAsync());
return self}, function($ctx1) {$ctx1.fill(self,"testIsAsyncReturnsCorrectValues",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "testIsAsyncReturnsCorrectValues\x0a    self deny: self isAsync.\x0a    self timeout: 0.\x0a    self assert: self isAsync.\x0a    self finished.\x0a    self deny: self isAsync",
messageSends: ["deny:", "isAsync", "timeout:", "assert:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testPass",
smalltalk.method({
selector: "testPass",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flag"]="bad";
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._assert_(true);
_st(self)._finished();
self["@flag"]="ok";
return self["@flag"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"testPass",{}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "testPass\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a    flag := (self async: [ self assert: true. self finished. flag := 'ok' ]) valueWithTimeout: 5",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testTimeouts",
smalltalk.method({
selector: "testTimeouts",
category: 'tests',
fn: function (){
var self=this;
var suite,runner,result,assertBlock;
return smalltalk.withContext(function($ctx1) { var $1,$2;
suite=_st(["fakeTimeout", "fakeMultipleTimeoutFailing", "fakeMultipleTimeoutPassing", "testPass"])._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._class())._selector_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
runner=_st((smalltalk.TestSuiteRunner || TestSuiteRunner))._on_(suite);
_st(self)._timeout_((200));
result=_st(runner)._result();
assertBlock=_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._assert_equals_(_st(self)._selectorSetOf_(_st(result)._errors()),_st((smalltalk.Set || Set))._new());
_st(self)._assert_equals_(_st(self)._selectorSetOf_(_st(result)._failures()),_st(["fakeMultipleTimeoutFailing", "fakeTimeout"])._asSet());
return _st(self)._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(runner)._announcer())._on_do_((smalltalk.ResultAnnouncement || ResultAnnouncement),(function(ann){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(ann)._result()).__eq_eq(result);
if(smalltalk.assert($1)){
$2=_st(_st(result)._runs()).__eq(_st(result)._total());
return _st($2)._ifTrue_(assertBlock);
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(runner)._run();
return self}, function($ctx1) {$ctx1.fill(self,"testTimeouts",{suite:suite,runner:runner,result:result,assertBlock:assertBlock}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "testTimeouts\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeTimeout' 'fakeMultipleTimeoutFailing' 'fakeMultipleTimeoutPassing' 'testPass') collect: [ :each | self class selector: each ].\x0a    runner := TestSuiteRunner on: suite.\x0a    self timeout: 200.\x0a\x09result := runner result.\x0a    assertBlock := self async: [\x0a\x09\x09self assert: (self selectorSetOf: result errors) equals: Set new.\x0a\x09\x09self assert: (self selectorSetOf: result failures) equals: #('fakeMultipleTimeoutFailing' 'fakeTimeout') asSet.\x0a\x09\x09self finished\x0a  \x09].\x0a    runner announcer on: ResultAnnouncement do: [:ann |\x0a    \x09ann result == result  ifTrue: [ result runs = result total ifTrue: assertBlock ]].\x0a\x09runner run",
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "new", "failures", "asSet", "finished", "on:do:", "ifTrue:", "=", "total", "runs", "==", "announcer", "run"],
referencedClasses: ["TestSuiteRunner", "Set", "ResultAnnouncement"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testTwoAsyncPassesWithFinishedOnlyOneIsRun",
smalltalk.method({
selector: "testTwoAsyncPassesWithFinishedOnlyOneIsRun",
category: 'tests',
fn: function (){
var self=this;
var x;
return smalltalk.withContext(function($ctx1) { self["@flag"]="bad";
_st(self)._timeout_((10));
x=(0);
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._finished();
self["@flag"]="ok";
self["@flag"];
x=_st(x).__plus((1));
x;
return _st(self)._assert_equals_(x,(1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((0));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._finished();
self["@flag"]="ok";
self["@flag"];
x=_st(x).__plus((1));
x;
return _st(self)._assert_equals_(x,(1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((0));
return self}, function($ctx1) {$ctx1.fill(self,"testTwoAsyncPassesWithFinishedOnlyOneIsRun",{x:x}, smalltalk.SUnitAsyncTest)})},
args: [],
source: "testTwoAsyncPassesWithFinishedOnlyOneIsRun\x0a\x09| x |\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a    x := 0.\x0a    flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.\x0a    flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished", "+", "assert:equals:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);



