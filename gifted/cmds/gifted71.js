/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */

(function(_0x4f7f1d,_0x5762cf){const _0x523abe=_0x5bce,_0x12bffb=_0x4f7f1d();while(!![]){try{const _0x44d1d5=-parseInt(_0x523abe(0x19d))/0x1*(parseInt(_0x523abe(0x19c))/0x2)+parseInt(_0x523abe(0x1ad))/0x3*(-parseInt(_0x523abe(0x184))/0x4)+parseInt(_0x523abe(0x191))/0x5*(parseInt(_0x523abe(0x198))/0x6)+parseInt(_0x523abe(0x1ac))/0x7+-parseInt(_0x523abe(0x195))/0x8+-parseInt(_0x523abe(0x193))/0x9+parseInt(_0x523abe(0x1a5))/0xa;if(_0x44d1d5===_0x5762cf)break;else _0x12bffb['push'](_0x12bffb['shift']());}catch(_0x898cf6){_0x12bffb['push'](_0x12bffb['shift']());}}}(_0x23d6,0xebc42));function _0x5bce(_0x134790,_0x24825c){const _0x23d6ef=_0x23d6();return _0x5bce=function(_0x5bce1e,_0x21cc91){_0x5bce1e=_0x5bce1e-0x17f;let _0xdfed0e=_0x23d6ef[_0x5bce1e];return _0xdfed0e;},_0x5bce(_0x134790,_0x24825c);}function _0x23d6(){const _0x2b2227=['relayMessage','imageMessage','2605sNBVTv','*「▰▰▰▰▰▰▰▱▱▱」*','8771130vsHMHX','mtype','5931888auIPYM','image','audioMessage','11838Ioazlu','Failed\x20to\x20download\x20media.','Unknown\x20media\x20type.','mp3','2326EeCJEc','258eYBHMx','quoted','length','*「▰▰▰▰▱▱▱▱▱▱」*','body','url','download','startsWith','11028230kiHtxb','pushName','*「▰▰▰▰▰▱▱▱▱▱」*','video','Error\x20processing\x20media.','split','videoMessage','7083930oMmbUB','53646uVqTFZ','from','*「▰▰▰▱▱▱▱▱▱▱」*','slice','MB.','mp4','\x20Here\x20Is\x20Your\x20Media*\x0a*url:*\x20','now','36dvrISU','tourl','Error\x20processing\x20media:','*「▰▰▰▰▰▰▰▰▰▰」*','includes','sendMessage','toLowerCase','*「▰▰▰▰▰▰▰▰▱▱」*','reply','Send/Reply\x20with\x20an\x20image,\x20video,\x20or\x20audio\x20to\x20upload\x20','error'];_0x23d6=function(){return _0x2b2227;};return _0x23d6();}import{UploadFileUgu,TelegraPh}from'../giftedte.js';import{writeFile,unlink}from'fs/promises';const MAX_FILE_SIZE_MB=0xc8,tourl=async(_0x1a14bd,_0x4e8715)=>{const _0x8030e2=_0x5bce,_0x43b48a=_0x1a14bd[_0x8030e2(0x1a1)]['match'](/^[\\/!#.]/),_0x59e59c=_0x43b48a?_0x43b48a[0x0]:'/',_0x1b0bf4=_0x1a14bd[_0x8030e2(0x1a1)][_0x8030e2(0x1a4)](_0x59e59c)?_0x1a14bd[_0x8030e2(0x1a1)][_0x8030e2(0x17f)](_0x59e59c['length'])[_0x8030e2(0x1aa)]('\x20')[0x0][_0x8030e2(0x18a)]():'',_0x16789f=[_0x8030e2(0x185),'geturl',_0x8030e2(0x1a2)];if(_0x16789f[_0x8030e2(0x188)](_0x1b0bf4)){if(!_0x1a14bd['quoted']||![_0x8030e2(0x190),_0x8030e2(0x1ab),_0x8030e2(0x197)]['includes'](_0x1a14bd['quoted'][_0x8030e2(0x194)]))return _0x1a14bd['reply'](_0x8030e2(0x18d)+(_0x59e59c+_0x1b0bf4));try{const _0x2a8e33=[_0x8030e2(0x1af),_0x8030e2(0x1a0),_0x8030e2(0x1a7),'*「▰▰▰▰▰▰▱▱▱▱」*',_0x8030e2(0x192),_0x8030e2(0x18b),'*「▰▰▰▰▰▰▰▰▰▱」*',_0x8030e2(0x187)],_0x501aba=_0x2a8e33[_0x8030e2(0x19f)];let _0x1f666e=0x0;const {key:_0x229691}=await _0x4e8715[_0x8030e2(0x189)](_0x1a14bd[_0x8030e2(0x1ae)],{'text':_0x2a8e33[_0x1f666e]},{'quoted':_0x1a14bd}),_0x384c15=setInterval(()=>{const _0x55b7ae=_0x8030e2;_0x1f666e=(_0x1f666e+0x1)%_0x501aba,_0x4e8715[_0x55b7ae(0x18f)](_0x1a14bd[_0x55b7ae(0x1ae)],{'protocolMessage':{'key':_0x229691,'type':0xe,'editedMessage':{'conversation':_0x2a8e33[_0x1f666e]}}},{});},0x1f4),_0xbe90a2=await _0x1a14bd[_0x8030e2(0x19e)][_0x8030e2(0x1a3)]();if(!_0xbe90a2)throw new Error(_0x8030e2(0x199));const _0x1baa46=_0xbe90a2[_0x8030e2(0x19f)]/(0x400*0x400);if(_0x1baa46>MAX_FILE_SIZE_MB)return clearInterval(_0x384c15),_0x1a14bd[_0x8030e2(0x18c)]('File\x20size\x20exceeds\x20the\x20limit\x20of\x20'+MAX_FILE_SIZE_MB+_0x8030e2(0x180));const _0x351535=getFileExtension(_0x1a14bd[_0x8030e2(0x19e)][_0x8030e2(0x194)]);if(!_0x351535)throw new Error(_0x8030e2(0x19a));const _0xb7bb5e='./'+Date[_0x8030e2(0x183)]()+'.'+_0x351535;await writeFile(_0xb7bb5e,_0xbe90a2);let _0x142817;_0x1a14bd[_0x8030e2(0x19e)][_0x8030e2(0x194)]===_0x8030e2(0x190)?_0x142817=await TelegraPh(_0xb7bb5e):_0x142817=await UploadFileUgu(_0xb7bb5e);clearInterval(_0x384c15),await _0x4e8715[_0x8030e2(0x18f)](_0x1a14bd[_0x8030e2(0x1ae)],{'protocolMessage':{'key':_0x229691,'type':0xe,'editedMessage':{'conversation':'✅\x20Loading\x20complete.'}}},{});const _0x478582=getMediaType(_0x1a14bd[_0x8030e2(0x19e)][_0x8030e2(0x194)]),_0x48b957=_0x142817[_0x8030e2(0x1a2)]||_0x142817,_0x5afda5={[_0x478582]:{'url':_0x48b957},'caption':'*Hey\x20'+_0x1a14bd[_0x8030e2(0x1a6)]+_0x8030e2(0x182)+_0x48b957};await _0x4e8715[_0x8030e2(0x189)](_0x1a14bd[_0x8030e2(0x1ae)],_0x5afda5,{'quoted':_0x1a14bd}),await unlink(_0xb7bb5e);}catch(_0x4a1698){console[_0x8030e2(0x18e)](_0x8030e2(0x186),_0x4a1698),_0x1a14bd['reply'](_0x8030e2(0x1a9));}}},getFileExtension=_0x3198e2=>{const _0xd3f065=_0x5bce;switch(_0x3198e2){case _0xd3f065(0x190):return'jpg';case _0xd3f065(0x1ab):return _0xd3f065(0x181);case _0xd3f065(0x197):return _0xd3f065(0x19b);default:return null;}},getMediaType=_0x592619=>{const _0x57e9a7=_0x5bce;switch(_0x592619){case'imageMessage':return _0x57e9a7(0x196);case _0x57e9a7(0x1ab):return _0x57e9a7(0x1a8);case'audioMessage':return'audio';default:return null;}};export default tourl;

/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */