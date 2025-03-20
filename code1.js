gdjs._49bCode = {};
gdjs._49bCode.localVariables = [];
gdjs._49bCode.GDbg_95951Objects1= [];
gdjs._49bCode.GDbg_95951Objects2= [];
gdjs._49bCode.GDcursorObjects1= [];
gdjs._49bCode.GDcursorObjects2= [];
gdjs._49bCode.GDbtn_9595avancarObjects1= [];
gdjs._49bCode.GDbtn_9595avancarObjects2= [];
gdjs._49bCode.GDBlackBackgroundObjects1= [];
gdjs._49bCode.GDBlackBackgroundObjects2= [];
gdjs._49bCode.GDbg_9595startObjects1= [];
gdjs._49bCode.GDbg_9595startObjects2= [];
gdjs._49bCode.GDquadro_9595startObjects1= [];
gdjs._49bCode.GDquadro_9595startObjects2= [];
gdjs._49bCode.GDbtn_9595jogarObjects1= [];
gdjs._49bCode.GDbtn_9595jogarObjects2= [];


gdjs._49bCode.asyncCallback18271732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49bCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}gdjs._49bCode.localVariables.length = 0;
}
gdjs._49bCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._49bCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._49bCode.asyncCallback18271732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49bCode.asyncCallback18272364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49bCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", false);
}gdjs._49bCode.localVariables.length = 0;
}
gdjs._49bCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._49bCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._49bCode.asyncCallback18272364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49bCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._49bCode.GDcursorObjects1);
{for(var i = 0, len = gdjs._49bCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs._49bCode.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._49bCode.GDBlackBackgroundObjects1);
{for(var i = 0, len = gdjs._49bCode.GDBlackBackgroundObjects1.length ;i < len;++i) {
    gdjs._49bCode.GDBlackBackgroundObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._49bCode.GDcursorObjects1);
{for(var i = 0, len = gdjs._49bCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs._49bCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs._49bCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs._49bCode.GDcursorObjects1[i].hide(false);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_avancar"), gdjs._49bCode.GDbtn_9595avancarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49bCode.GDbtn_9595avancarObjects1.length;i<l;++i) {
    if ( gdjs._49bCode.GDbtn_9595avancarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49bCode.GDbtn_9595avancarObjects1[k] = gdjs._49bCode.GDbtn_9595avancarObjects1[i];
        ++k;
    }
}
gdjs._49bCode.GDbtn_9595avancarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\pop.ogg", false, 50, 1);
}
{ //Subevents
gdjs._49bCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs._49bCode.GDbtn_9595jogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49bCode.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs._49bCode.GDbtn_9595jogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49bCode.GDbtn_9595jogarObjects1[k] = gdjs._49bCode.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs._49bCode.GDbtn_9595jogarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._49bCode.GDBlackBackgroundObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\pop.ogg", false, 50, 1);
}{for(var i = 0, len = gdjs._49bCode.GDBlackBackgroundObjects1.length ;i < len;++i) {
    gdjs._49bCode.GDBlackBackgroundObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 255, "linear", 0.5, false);
}
}
{ //Subevents
gdjs._49bCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs._49bCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49bCode.GDbg_95951Objects1.length = 0;
gdjs._49bCode.GDbg_95951Objects2.length = 0;
gdjs._49bCode.GDcursorObjects1.length = 0;
gdjs._49bCode.GDcursorObjects2.length = 0;
gdjs._49bCode.GDbtn_9595avancarObjects1.length = 0;
gdjs._49bCode.GDbtn_9595avancarObjects2.length = 0;
gdjs._49bCode.GDBlackBackgroundObjects1.length = 0;
gdjs._49bCode.GDBlackBackgroundObjects2.length = 0;
gdjs._49bCode.GDbg_9595startObjects1.length = 0;
gdjs._49bCode.GDbg_9595startObjects2.length = 0;
gdjs._49bCode.GDquadro_9595startObjects1.length = 0;
gdjs._49bCode.GDquadro_9595startObjects2.length = 0;
gdjs._49bCode.GDbtn_9595jogarObjects1.length = 0;
gdjs._49bCode.GDbtn_9595jogarObjects2.length = 0;

gdjs._49bCode.eventsList2(runtimeScene);
gdjs._49bCode.GDbg_95951Objects1.length = 0;
gdjs._49bCode.GDbg_95951Objects2.length = 0;
gdjs._49bCode.GDcursorObjects1.length = 0;
gdjs._49bCode.GDcursorObjects2.length = 0;
gdjs._49bCode.GDbtn_9595avancarObjects1.length = 0;
gdjs._49bCode.GDbtn_9595avancarObjects2.length = 0;
gdjs._49bCode.GDBlackBackgroundObjects1.length = 0;
gdjs._49bCode.GDBlackBackgroundObjects2.length = 0;
gdjs._49bCode.GDbg_9595startObjects1.length = 0;
gdjs._49bCode.GDbg_9595startObjects2.length = 0;
gdjs._49bCode.GDquadro_9595startObjects1.length = 0;
gdjs._49bCode.GDquadro_9595startObjects2.length = 0;
gdjs._49bCode.GDbtn_9595jogarObjects1.length = 0;
gdjs._49bCode.GDbtn_9595jogarObjects2.length = 0;


return;

}

gdjs['_49bCode'] = gdjs._49bCode;
