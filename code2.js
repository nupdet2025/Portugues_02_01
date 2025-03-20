gdjs._50Code = {};
gdjs._50Code.localVariables = [];
gdjs._50Code.GDbg_95951Objects1= [];
gdjs._50Code.GDbg_95951Objects2= [];
gdjs._50Code.GDbg_95951Objects3= [];
gdjs._50Code.GDbg_95951Objects4= [];
gdjs._50Code.GDPersonagem1Objects1= [];
gdjs._50Code.GDPersonagem1Objects2= [];
gdjs._50Code.GDPersonagem1Objects3= [];
gdjs._50Code.GDPersonagem1Objects4= [];
gdjs._50Code.GDcursorObjects1= [];
gdjs._50Code.GDcursorObjects2= [];
gdjs._50Code.GDcursorObjects3= [];
gdjs._50Code.GDcursorObjects4= [];
gdjs._50Code.GDBlackBackgroundObjects1= [];
gdjs._50Code.GDBlackBackgroundObjects2= [];
gdjs._50Code.GDBlackBackgroundObjects3= [];
gdjs._50Code.GDBlackBackgroundObjects4= [];
gdjs._50Code.GDStarParticleObjects1= [];
gdjs._50Code.GDStarParticleObjects2= [];
gdjs._50Code.GDStarParticleObjects3= [];
gdjs._50Code.GDStarParticleObjects4= [];
gdjs._50Code.GDBrilhoObjects1= [];
gdjs._50Code.GDBrilhoObjects2= [];
gdjs._50Code.GDBrilhoObjects3= [];
gdjs._50Code.GDBrilhoObjects4= [];
gdjs._50Code.GDbg_9595masacaraObjects1= [];
gdjs._50Code.GDbg_9595masacaraObjects2= [];
gdjs._50Code.GDbg_9595masacaraObjects3= [];
gdjs._50Code.GDbg_9595masacaraObjects4= [];
gdjs._50Code.GDRedFlameObjects1= [];
gdjs._50Code.GDRedFlameObjects2= [];
gdjs._50Code.GDRedFlameObjects3= [];
gdjs._50Code.GDRedFlameObjects4= [];
gdjs._50Code.GDPoeiraObjects1= [];
gdjs._50Code.GDPoeiraObjects2= [];
gdjs._50Code.GDPoeiraObjects3= [];
gdjs._50Code.GDPoeiraObjects4= [];
gdjs._50Code.GDbg_9595masacara_9595noiteObjects1= [];
gdjs._50Code.GDbg_9595masacara_9595noiteObjects2= [];
gdjs._50Code.GDbg_9595masacara_9595noiteObjects3= [];
gdjs._50Code.GDbg_9595masacara_9595noiteObjects4= [];
gdjs._50Code.GDbtn_9595acertoObjects1= [];
gdjs._50Code.GDbtn_9595acertoObjects2= [];
gdjs._50Code.GDbtn_9595acertoObjects3= [];
gdjs._50Code.GDbtn_9595acertoObjects4= [];
gdjs._50Code.GDbtn_9595erroObjects1= [];
gdjs._50Code.GDbtn_9595erroObjects2= [];
gdjs._50Code.GDbtn_9595erroObjects3= [];
gdjs._50Code.GDbtn_9595erroObjects4= [];
gdjs._50Code.GDbtn_9595erro2Objects1= [];
gdjs._50Code.GDbtn_9595erro2Objects2= [];
gdjs._50Code.GDbtn_9595erro2Objects3= [];
gdjs._50Code.GDbtn_9595erro2Objects4= [];
gdjs._50Code.GDBrilho_9595LampadaObjects1= [];
gdjs._50Code.GDBrilho_9595LampadaObjects2= [];
gdjs._50Code.GDBrilho_9595LampadaObjects3= [];
gdjs._50Code.GDBrilho_9595LampadaObjects4= [];


gdjs._50Code.asyncCallback18304700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._50Code.GDBlackBackgroundObjects2);
{for(var i = 0, len = gdjs._50Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._50Code.GDBlackBackgroundObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs._50Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._50Code.GDBlackBackgroundObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 1, false);
}
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._50Code.asyncCallback18304700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.asyncCallback9636412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "3", false);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback9636412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.asyncCallback18308396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._50Code.GDBlackBackgroundObjects3);
{for(var i = 0, len = gdjs._50Code.GDBlackBackgroundObjects3.length ;i < len;++i) {
    gdjs._50Code.GDBlackBackgroundObjects3[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 255, "linear", 0.5, false);
}
}
{ //Subevents
gdjs._50Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._50Code.asyncCallback18308396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.asyncCallback9889940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sucess.mp3", false, 100, 1);
}
{ //Subevents
gdjs._50Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback9889940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.asyncCallback18309532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_erro"), gdjs._50Code.GDbtn_9595erroObjects2);

{for(var i = 0, len = gdjs._50Code.GDbtn_9595erroObjects2.length ;i < len;++i) {
    gdjs._50Code.GDbtn_9595erroObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GDbtn_9595erroObjects1) asyncObjectsList.addObject("btn_erro", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback18309532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.asyncCallback18311652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_erro2"), gdjs._50Code.GDbtn_9595erro2Objects2);

{for(var i = 0, len = gdjs._50Code.GDbtn_9595erro2Objects2.length ;i < len;++i) {
    gdjs._50Code.GDbtn_9595erro2Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GDbtn_9595erro2Objects1) asyncObjectsList.addObject("btn_erro2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback18311652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._50Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._50Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._50Code.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs._50Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._50Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._50Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._50Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs._50Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._50Code.GDcursorObjects1[i].hide(false);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_acerto"), gdjs._50Code.GDbtn_9595acertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_erro"), gdjs._50Code.GDbtn_9595erroObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_erro2"), gdjs._50Code.GDbtn_9595erro2Objects1);
{for(var i = 0, len = gdjs._50Code.GDbtn_9595acertoObjects1.length ;i < len;++i) {
    gdjs._50Code.GDbtn_9595acertoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._50Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._50Code.GDbtn_9595erroObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._50Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDbtn_9595erro2Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_acerto"), gdjs._50Code.GDbtn_9595acertoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50Code.GDbtn_9595acertoObjects1.length;i<l;++i) {
    if ( gdjs._50Code.GDbtn_9595acertoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._50Code.GDbtn_9595acertoObjects1[k] = gdjs._50Code.GDbtn_9595acertoObjects1[i];
        ++k;
    }
}
gdjs._50Code.GDbtn_9595acertoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDbtn_9595acertoObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\correct-156911.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GDbtn_9595acertoObjects1.length ;i < len;++i) {
    gdjs._50Code.GDbtn_9595acertoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs._50Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_erro"), gdjs._50Code.GDbtn_9595erroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50Code.GDbtn_9595erroObjects1.length;i<l;++i) {
    if ( gdjs._50Code.GDbtn_9595erroObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._50Code.GDbtn_9595erroObjects1[k] = gdjs._50Code.GDbtn_9595erroObjects1[i];
        ++k;
    }
}
gdjs._50Code.GDbtn_9595erroObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDbtn_9595erroObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._50Code.GDbtn_9595erroObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._50Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._50Code.GDbtn_9595erroObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs._50Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_erro2"), gdjs._50Code.GDbtn_9595erro2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50Code.GDbtn_9595erro2Objects1.length;i<l;++i) {
    if ( gdjs._50Code.GDbtn_9595erro2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._50Code.GDbtn_9595erro2Objects1[k] = gdjs._50Code.GDbtn_9595erro2Objects1[i];
        ++k;
    }
}
gdjs._50Code.GDbtn_9595erro2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDbtn_9595erro2Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDbtn_9595erro2Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._50Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDbtn_9595erro2Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs._50Code.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs._50Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50Code.GDbg_95951Objects1.length = 0;
gdjs._50Code.GDbg_95951Objects2.length = 0;
gdjs._50Code.GDbg_95951Objects3.length = 0;
gdjs._50Code.GDbg_95951Objects4.length = 0;
gdjs._50Code.GDPersonagem1Objects1.length = 0;
gdjs._50Code.GDPersonagem1Objects2.length = 0;
gdjs._50Code.GDPersonagem1Objects3.length = 0;
gdjs._50Code.GDPersonagem1Objects4.length = 0;
gdjs._50Code.GDcursorObjects1.length = 0;
gdjs._50Code.GDcursorObjects2.length = 0;
gdjs._50Code.GDcursorObjects3.length = 0;
gdjs._50Code.GDcursorObjects4.length = 0;
gdjs._50Code.GDBlackBackgroundObjects1.length = 0;
gdjs._50Code.GDBlackBackgroundObjects2.length = 0;
gdjs._50Code.GDBlackBackgroundObjects3.length = 0;
gdjs._50Code.GDBlackBackgroundObjects4.length = 0;
gdjs._50Code.GDStarParticleObjects1.length = 0;
gdjs._50Code.GDStarParticleObjects2.length = 0;
gdjs._50Code.GDStarParticleObjects3.length = 0;
gdjs._50Code.GDStarParticleObjects4.length = 0;
gdjs._50Code.GDBrilhoObjects1.length = 0;
gdjs._50Code.GDBrilhoObjects2.length = 0;
gdjs._50Code.GDBrilhoObjects3.length = 0;
gdjs._50Code.GDBrilhoObjects4.length = 0;
gdjs._50Code.GDbg_9595masacaraObjects1.length = 0;
gdjs._50Code.GDbg_9595masacaraObjects2.length = 0;
gdjs._50Code.GDbg_9595masacaraObjects3.length = 0;
gdjs._50Code.GDbg_9595masacaraObjects4.length = 0;
gdjs._50Code.GDRedFlameObjects1.length = 0;
gdjs._50Code.GDRedFlameObjects2.length = 0;
gdjs._50Code.GDRedFlameObjects3.length = 0;
gdjs._50Code.GDRedFlameObjects4.length = 0;
gdjs._50Code.GDPoeiraObjects1.length = 0;
gdjs._50Code.GDPoeiraObjects2.length = 0;
gdjs._50Code.GDPoeiraObjects3.length = 0;
gdjs._50Code.GDPoeiraObjects4.length = 0;
gdjs._50Code.GDbg_9595masacara_9595noiteObjects1.length = 0;
gdjs._50Code.GDbg_9595masacara_9595noiteObjects2.length = 0;
gdjs._50Code.GDbg_9595masacara_9595noiteObjects3.length = 0;
gdjs._50Code.GDbg_9595masacara_9595noiteObjects4.length = 0;
gdjs._50Code.GDbtn_9595acertoObjects1.length = 0;
gdjs._50Code.GDbtn_9595acertoObjects2.length = 0;
gdjs._50Code.GDbtn_9595acertoObjects3.length = 0;
gdjs._50Code.GDbtn_9595acertoObjects4.length = 0;
gdjs._50Code.GDbtn_9595erroObjects1.length = 0;
gdjs._50Code.GDbtn_9595erroObjects2.length = 0;
gdjs._50Code.GDbtn_9595erroObjects3.length = 0;
gdjs._50Code.GDbtn_9595erroObjects4.length = 0;
gdjs._50Code.GDbtn_9595erro2Objects1.length = 0;
gdjs._50Code.GDbtn_9595erro2Objects2.length = 0;
gdjs._50Code.GDbtn_9595erro2Objects3.length = 0;
gdjs._50Code.GDbtn_9595erro2Objects4.length = 0;
gdjs._50Code.GDBrilho_9595LampadaObjects1.length = 0;
gdjs._50Code.GDBrilho_9595LampadaObjects2.length = 0;
gdjs._50Code.GDBrilho_9595LampadaObjects3.length = 0;
gdjs._50Code.GDBrilho_9595LampadaObjects4.length = 0;

gdjs._50Code.eventsList6(runtimeScene);
gdjs._50Code.GDbg_95951Objects1.length = 0;
gdjs._50Code.GDbg_95951Objects2.length = 0;
gdjs._50Code.GDbg_95951Objects3.length = 0;
gdjs._50Code.GDbg_95951Objects4.length = 0;
gdjs._50Code.GDPersonagem1Objects1.length = 0;
gdjs._50Code.GDPersonagem1Objects2.length = 0;
gdjs._50Code.GDPersonagem1Objects3.length = 0;
gdjs._50Code.GDPersonagem1Objects4.length = 0;
gdjs._50Code.GDcursorObjects1.length = 0;
gdjs._50Code.GDcursorObjects2.length = 0;
gdjs._50Code.GDcursorObjects3.length = 0;
gdjs._50Code.GDcursorObjects4.length = 0;
gdjs._50Code.GDBlackBackgroundObjects1.length = 0;
gdjs._50Code.GDBlackBackgroundObjects2.length = 0;
gdjs._50Code.GDBlackBackgroundObjects3.length = 0;
gdjs._50Code.GDBlackBackgroundObjects4.length = 0;
gdjs._50Code.GDStarParticleObjects1.length = 0;
gdjs._50Code.GDStarParticleObjects2.length = 0;
gdjs._50Code.GDStarParticleObjects3.length = 0;
gdjs._50Code.GDStarParticleObjects4.length = 0;
gdjs._50Code.GDBrilhoObjects1.length = 0;
gdjs._50Code.GDBrilhoObjects2.length = 0;
gdjs._50Code.GDBrilhoObjects3.length = 0;
gdjs._50Code.GDBrilhoObjects4.length = 0;
gdjs._50Code.GDbg_9595masacaraObjects1.length = 0;
gdjs._50Code.GDbg_9595masacaraObjects2.length = 0;
gdjs._50Code.GDbg_9595masacaraObjects3.length = 0;
gdjs._50Code.GDbg_9595masacaraObjects4.length = 0;
gdjs._50Code.GDRedFlameObjects1.length = 0;
gdjs._50Code.GDRedFlameObjects2.length = 0;
gdjs._50Code.GDRedFlameObjects3.length = 0;
gdjs._50Code.GDRedFlameObjects4.length = 0;
gdjs._50Code.GDPoeiraObjects1.length = 0;
gdjs._50Code.GDPoeiraObjects2.length = 0;
gdjs._50Code.GDPoeiraObjects3.length = 0;
gdjs._50Code.GDPoeiraObjects4.length = 0;
gdjs._50Code.GDbg_9595masacara_9595noiteObjects1.length = 0;
gdjs._50Code.GDbg_9595masacara_9595noiteObjects2.length = 0;
gdjs._50Code.GDbg_9595masacara_9595noiteObjects3.length = 0;
gdjs._50Code.GDbg_9595masacara_9595noiteObjects4.length = 0;
gdjs._50Code.GDbtn_9595acertoObjects1.length = 0;
gdjs._50Code.GDbtn_9595acertoObjects2.length = 0;
gdjs._50Code.GDbtn_9595acertoObjects3.length = 0;
gdjs._50Code.GDbtn_9595acertoObjects4.length = 0;
gdjs._50Code.GDbtn_9595erroObjects1.length = 0;
gdjs._50Code.GDbtn_9595erroObjects2.length = 0;
gdjs._50Code.GDbtn_9595erroObjects3.length = 0;
gdjs._50Code.GDbtn_9595erroObjects4.length = 0;
gdjs._50Code.GDbtn_9595erro2Objects1.length = 0;
gdjs._50Code.GDbtn_9595erro2Objects2.length = 0;
gdjs._50Code.GDbtn_9595erro2Objects3.length = 0;
gdjs._50Code.GDbtn_9595erro2Objects4.length = 0;
gdjs._50Code.GDBrilho_9595LampadaObjects1.length = 0;
gdjs._50Code.GDBrilho_9595LampadaObjects2.length = 0;
gdjs._50Code.GDBrilho_9595LampadaObjects3.length = 0;
gdjs._50Code.GDBrilho_9595LampadaObjects4.length = 0;


return;

}

gdjs['_50Code'] = gdjs._50Code;
