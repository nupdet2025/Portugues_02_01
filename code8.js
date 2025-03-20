gdjs._56Code = {};
gdjs._56Code.localVariables = [];
gdjs._56Code.GDbg_95951Objects1= [];
gdjs._56Code.GDbg_95951Objects2= [];
gdjs._56Code.GDbg_95951Objects3= [];
gdjs._56Code.GDbg_95951Objects4= [];
gdjs._56Code.GDPersonagem1Objects1= [];
gdjs._56Code.GDPersonagem1Objects2= [];
gdjs._56Code.GDPersonagem1Objects3= [];
gdjs._56Code.GDPersonagem1Objects4= [];
gdjs._56Code.GDcursorObjects1= [];
gdjs._56Code.GDcursorObjects2= [];
gdjs._56Code.GDcursorObjects3= [];
gdjs._56Code.GDcursorObjects4= [];
gdjs._56Code.GDbtn_9595avancarObjects1= [];
gdjs._56Code.GDbtn_9595avancarObjects2= [];
gdjs._56Code.GDbtn_9595avancarObjects3= [];
gdjs._56Code.GDbtn_9595avancarObjects4= [];
gdjs._56Code.GDBlackBackgroundObjects1= [];
gdjs._56Code.GDBlackBackgroundObjects2= [];
gdjs._56Code.GDBlackBackgroundObjects3= [];
gdjs._56Code.GDBlackBackgroundObjects4= [];
gdjs._56Code.GDBrilhoObjects1= [];
gdjs._56Code.GDBrilhoObjects2= [];
gdjs._56Code.GDBrilhoObjects3= [];
gdjs._56Code.GDBrilhoObjects4= [];
gdjs._56Code.GDbg_9595masacaraObjects1= [];
gdjs._56Code.GDbg_9595masacaraObjects2= [];
gdjs._56Code.GDbg_9595masacaraObjects3= [];
gdjs._56Code.GDbg_9595masacaraObjects4= [];
gdjs._56Code.GDRedFlameObjects1= [];
gdjs._56Code.GDRedFlameObjects2= [];
gdjs._56Code.GDRedFlameObjects3= [];
gdjs._56Code.GDRedFlameObjects4= [];
gdjs._56Code.GDPoeiraObjects1= [];
gdjs._56Code.GDPoeiraObjects2= [];
gdjs._56Code.GDPoeiraObjects3= [];
gdjs._56Code.GDPoeiraObjects4= [];
gdjs._56Code.GDbg_9595masacara_9595noiteObjects1= [];
gdjs._56Code.GDbg_9595masacara_9595noiteObjects2= [];
gdjs._56Code.GDbg_9595masacara_9595noiteObjects3= [];
gdjs._56Code.GDbg_9595masacara_9595noiteObjects4= [];
gdjs._56Code.GDbtn_9595acertoObjects1= [];
gdjs._56Code.GDbtn_9595acertoObjects2= [];
gdjs._56Code.GDbtn_9595acertoObjects3= [];
gdjs._56Code.GDbtn_9595acertoObjects4= [];
gdjs._56Code.GDbtn_9595erroObjects1= [];
gdjs._56Code.GDbtn_9595erroObjects2= [];
gdjs._56Code.GDbtn_9595erroObjects3= [];
gdjs._56Code.GDbtn_9595erroObjects4= [];
gdjs._56Code.GDbtn_9595erro2Objects1= [];
gdjs._56Code.GDbtn_9595erro2Objects2= [];
gdjs._56Code.GDbtn_9595erro2Objects3= [];
gdjs._56Code.GDbtn_9595erro2Objects4= [];
gdjs._56Code.GDbrilho_9595lampadaObjects1= [];
gdjs._56Code.GDbrilho_9595lampadaObjects2= [];
gdjs._56Code.GDbrilho_9595lampadaObjects3= [];
gdjs._56Code.GDbrilho_9595lampadaObjects4= [];
gdjs._56Code.GDbrilho_9595lampada2Objects1= [];
gdjs._56Code.GDbrilho_9595lampada2Objects2= [];
gdjs._56Code.GDbrilho_9595lampada2Objects3= [];
gdjs._56Code.GDbrilho_9595lampada2Objects4= [];


gdjs._56Code.asyncCallback18693204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._56Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._56Code.GDBlackBackgroundObjects2);
{for(var i = 0, len = gdjs._56Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._56Code.GDBlackBackgroundObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs._56Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._56Code.GDBlackBackgroundObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 0.5, false);
}
}gdjs._56Code.localVariables.length = 0;
}
gdjs._56Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._56Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._56Code.asyncCallback18693204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._56Code.asyncCallback18697700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._56Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "9", false);
}gdjs._56Code.localVariables.length = 0;
}
gdjs._56Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._56Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._56Code.asyncCallback18697700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._56Code.asyncCallback18696468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._56Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._56Code.GDBlackBackgroundObjects3);
{for(var i = 0, len = gdjs._56Code.GDBlackBackgroundObjects3.length ;i < len;++i) {
    gdjs._56Code.GDBlackBackgroundObjects3[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 255, "linear", 0.5, false);
}
}
{ //Subevents
gdjs._56Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._56Code.localVariables.length = 0;
}
gdjs._56Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._56Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._56Code.asyncCallback18696468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._56Code.asyncCallback13493924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._56Code.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sucess.mp3", false, 100, 1);
}
{ //Subevents
gdjs._56Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._56Code.localVariables.length = 0;
}
gdjs._56Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._56Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._56Code.asyncCallback13493924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._56Code.asyncCallback18698708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._56Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_erro"), gdjs._56Code.GDbtn_9595erroObjects2);

{for(var i = 0, len = gdjs._56Code.GDbtn_9595erroObjects2.length ;i < len;++i) {
    gdjs._56Code.GDbtn_9595erroObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs._56Code.localVariables.length = 0;
}
gdjs._56Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._56Code.localVariables);
for (const obj of gdjs._56Code.GDbtn_9595erroObjects1) asyncObjectsList.addObject("btn_erro", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._56Code.asyncCallback18698708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._56Code.asyncCallback18701068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._56Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_erro2"), gdjs._56Code.GDbtn_9595erro2Objects2);

{for(var i = 0, len = gdjs._56Code.GDbtn_9595erro2Objects2.length ;i < len;++i) {
    gdjs._56Code.GDbtn_9595erro2Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs._56Code.localVariables.length = 0;
}
gdjs._56Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._56Code.localVariables);
for (const obj of gdjs._56Code.GDbtn_9595erro2Objects1) asyncObjectsList.addObject("btn_erro2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._56Code.asyncCallback18701068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._56Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._56Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._56Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._56Code.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs._56Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._56Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._56Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._56Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs._56Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._56Code.GDcursorObjects1[i].hide(false);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_acerto"), gdjs._56Code.GDbtn_9595acertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_erro"), gdjs._56Code.GDbtn_9595erroObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_erro2"), gdjs._56Code.GDbtn_9595erro2Objects1);
{for(var i = 0, len = gdjs._56Code.GDbtn_9595acertoObjects1.length ;i < len;++i) {
    gdjs._56Code.GDbtn_9595acertoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._56Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._56Code.GDbtn_9595erroObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._56Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._56Code.GDbtn_9595erro2Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_acerto"), gdjs._56Code.GDbtn_9595acertoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDbtn_9595acertoObjects1.length;i<l;++i) {
    if ( gdjs._56Code.GDbtn_9595acertoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDbtn_9595acertoObjects1[k] = gdjs._56Code.GDbtn_9595acertoObjects1[i];
        ++k;
    }
}
gdjs._56Code.GDbtn_9595acertoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._56Code.GDbtn_9595acertoObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\correct-156911.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._56Code.GDbtn_9595acertoObjects1.length ;i < len;++i) {
    gdjs._56Code.GDbtn_9595acertoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs._56Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_erro"), gdjs._56Code.GDbtn_9595erroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDbtn_9595erroObjects1.length;i<l;++i) {
    if ( gdjs._56Code.GDbtn_9595erroObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDbtn_9595erroObjects1[k] = gdjs._56Code.GDbtn_9595erroObjects1[i];
        ++k;
    }
}
gdjs._56Code.GDbtn_9595erroObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._56Code.GDbtn_9595erroObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._56Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._56Code.GDbtn_9595erroObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._56Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._56Code.GDbtn_9595erroObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs._56Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_erro2"), gdjs._56Code.GDbtn_9595erro2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._56Code.GDbtn_9595erro2Objects1.length;i<l;++i) {
    if ( gdjs._56Code.GDbtn_9595erro2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._56Code.GDbtn_9595erro2Objects1[k] = gdjs._56Code.GDbtn_9595erro2Objects1[i];
        ++k;
    }
}
gdjs._56Code.GDbtn_9595erro2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._56Code.GDbtn_9595erro2Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._56Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._56Code.GDbtn_9595erro2Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._56Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._56Code.GDbtn_9595erro2Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs._56Code.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs._56Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._56Code.GDbg_95951Objects1.length = 0;
gdjs._56Code.GDbg_95951Objects2.length = 0;
gdjs._56Code.GDbg_95951Objects3.length = 0;
gdjs._56Code.GDbg_95951Objects4.length = 0;
gdjs._56Code.GDPersonagem1Objects1.length = 0;
gdjs._56Code.GDPersonagem1Objects2.length = 0;
gdjs._56Code.GDPersonagem1Objects3.length = 0;
gdjs._56Code.GDPersonagem1Objects4.length = 0;
gdjs._56Code.GDcursorObjects1.length = 0;
gdjs._56Code.GDcursorObjects2.length = 0;
gdjs._56Code.GDcursorObjects3.length = 0;
gdjs._56Code.GDcursorObjects4.length = 0;
gdjs._56Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._56Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._56Code.GDbtn_9595avancarObjects3.length = 0;
gdjs._56Code.GDbtn_9595avancarObjects4.length = 0;
gdjs._56Code.GDBlackBackgroundObjects1.length = 0;
gdjs._56Code.GDBlackBackgroundObjects2.length = 0;
gdjs._56Code.GDBlackBackgroundObjects3.length = 0;
gdjs._56Code.GDBlackBackgroundObjects4.length = 0;
gdjs._56Code.GDBrilhoObjects1.length = 0;
gdjs._56Code.GDBrilhoObjects2.length = 0;
gdjs._56Code.GDBrilhoObjects3.length = 0;
gdjs._56Code.GDBrilhoObjects4.length = 0;
gdjs._56Code.GDbg_9595masacaraObjects1.length = 0;
gdjs._56Code.GDbg_9595masacaraObjects2.length = 0;
gdjs._56Code.GDbg_9595masacaraObjects3.length = 0;
gdjs._56Code.GDbg_9595masacaraObjects4.length = 0;
gdjs._56Code.GDRedFlameObjects1.length = 0;
gdjs._56Code.GDRedFlameObjects2.length = 0;
gdjs._56Code.GDRedFlameObjects3.length = 0;
gdjs._56Code.GDRedFlameObjects4.length = 0;
gdjs._56Code.GDPoeiraObjects1.length = 0;
gdjs._56Code.GDPoeiraObjects2.length = 0;
gdjs._56Code.GDPoeiraObjects3.length = 0;
gdjs._56Code.GDPoeiraObjects4.length = 0;
gdjs._56Code.GDbg_9595masacara_9595noiteObjects1.length = 0;
gdjs._56Code.GDbg_9595masacara_9595noiteObjects2.length = 0;
gdjs._56Code.GDbg_9595masacara_9595noiteObjects3.length = 0;
gdjs._56Code.GDbg_9595masacara_9595noiteObjects4.length = 0;
gdjs._56Code.GDbtn_9595acertoObjects1.length = 0;
gdjs._56Code.GDbtn_9595acertoObjects2.length = 0;
gdjs._56Code.GDbtn_9595acertoObjects3.length = 0;
gdjs._56Code.GDbtn_9595acertoObjects4.length = 0;
gdjs._56Code.GDbtn_9595erroObjects1.length = 0;
gdjs._56Code.GDbtn_9595erroObjects2.length = 0;
gdjs._56Code.GDbtn_9595erroObjects3.length = 0;
gdjs._56Code.GDbtn_9595erroObjects4.length = 0;
gdjs._56Code.GDbtn_9595erro2Objects1.length = 0;
gdjs._56Code.GDbtn_9595erro2Objects2.length = 0;
gdjs._56Code.GDbtn_9595erro2Objects3.length = 0;
gdjs._56Code.GDbtn_9595erro2Objects4.length = 0;
gdjs._56Code.GDbrilho_9595lampadaObjects1.length = 0;
gdjs._56Code.GDbrilho_9595lampadaObjects2.length = 0;
gdjs._56Code.GDbrilho_9595lampadaObjects3.length = 0;
gdjs._56Code.GDbrilho_9595lampadaObjects4.length = 0;
gdjs._56Code.GDbrilho_9595lampada2Objects1.length = 0;
gdjs._56Code.GDbrilho_9595lampada2Objects2.length = 0;
gdjs._56Code.GDbrilho_9595lampada2Objects3.length = 0;
gdjs._56Code.GDbrilho_9595lampada2Objects4.length = 0;

gdjs._56Code.eventsList6(runtimeScene);
gdjs._56Code.GDbg_95951Objects1.length = 0;
gdjs._56Code.GDbg_95951Objects2.length = 0;
gdjs._56Code.GDbg_95951Objects3.length = 0;
gdjs._56Code.GDbg_95951Objects4.length = 0;
gdjs._56Code.GDPersonagem1Objects1.length = 0;
gdjs._56Code.GDPersonagem1Objects2.length = 0;
gdjs._56Code.GDPersonagem1Objects3.length = 0;
gdjs._56Code.GDPersonagem1Objects4.length = 0;
gdjs._56Code.GDcursorObjects1.length = 0;
gdjs._56Code.GDcursorObjects2.length = 0;
gdjs._56Code.GDcursorObjects3.length = 0;
gdjs._56Code.GDcursorObjects4.length = 0;
gdjs._56Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._56Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._56Code.GDbtn_9595avancarObjects3.length = 0;
gdjs._56Code.GDbtn_9595avancarObjects4.length = 0;
gdjs._56Code.GDBlackBackgroundObjects1.length = 0;
gdjs._56Code.GDBlackBackgroundObjects2.length = 0;
gdjs._56Code.GDBlackBackgroundObjects3.length = 0;
gdjs._56Code.GDBlackBackgroundObjects4.length = 0;
gdjs._56Code.GDBrilhoObjects1.length = 0;
gdjs._56Code.GDBrilhoObjects2.length = 0;
gdjs._56Code.GDBrilhoObjects3.length = 0;
gdjs._56Code.GDBrilhoObjects4.length = 0;
gdjs._56Code.GDbg_9595masacaraObjects1.length = 0;
gdjs._56Code.GDbg_9595masacaraObjects2.length = 0;
gdjs._56Code.GDbg_9595masacaraObjects3.length = 0;
gdjs._56Code.GDbg_9595masacaraObjects4.length = 0;
gdjs._56Code.GDRedFlameObjects1.length = 0;
gdjs._56Code.GDRedFlameObjects2.length = 0;
gdjs._56Code.GDRedFlameObjects3.length = 0;
gdjs._56Code.GDRedFlameObjects4.length = 0;
gdjs._56Code.GDPoeiraObjects1.length = 0;
gdjs._56Code.GDPoeiraObjects2.length = 0;
gdjs._56Code.GDPoeiraObjects3.length = 0;
gdjs._56Code.GDPoeiraObjects4.length = 0;
gdjs._56Code.GDbg_9595masacara_9595noiteObjects1.length = 0;
gdjs._56Code.GDbg_9595masacara_9595noiteObjects2.length = 0;
gdjs._56Code.GDbg_9595masacara_9595noiteObjects3.length = 0;
gdjs._56Code.GDbg_9595masacara_9595noiteObjects4.length = 0;
gdjs._56Code.GDbtn_9595acertoObjects1.length = 0;
gdjs._56Code.GDbtn_9595acertoObjects2.length = 0;
gdjs._56Code.GDbtn_9595acertoObjects3.length = 0;
gdjs._56Code.GDbtn_9595acertoObjects4.length = 0;
gdjs._56Code.GDbtn_9595erroObjects1.length = 0;
gdjs._56Code.GDbtn_9595erroObjects2.length = 0;
gdjs._56Code.GDbtn_9595erroObjects3.length = 0;
gdjs._56Code.GDbtn_9595erroObjects4.length = 0;
gdjs._56Code.GDbtn_9595erro2Objects1.length = 0;
gdjs._56Code.GDbtn_9595erro2Objects2.length = 0;
gdjs._56Code.GDbtn_9595erro2Objects3.length = 0;
gdjs._56Code.GDbtn_9595erro2Objects4.length = 0;
gdjs._56Code.GDbrilho_9595lampadaObjects1.length = 0;
gdjs._56Code.GDbrilho_9595lampadaObjects2.length = 0;
gdjs._56Code.GDbrilho_9595lampadaObjects3.length = 0;
gdjs._56Code.GDbrilho_9595lampadaObjects4.length = 0;
gdjs._56Code.GDbrilho_9595lampada2Objects1.length = 0;
gdjs._56Code.GDbrilho_9595lampada2Objects2.length = 0;
gdjs._56Code.GDbrilho_9595lampada2Objects3.length = 0;
gdjs._56Code.GDbrilho_9595lampada2Objects4.length = 0;


return;

}

gdjs['_56Code'] = gdjs._56Code;
