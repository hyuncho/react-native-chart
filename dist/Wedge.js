Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
























var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
Shape=_reactNative.ART.Shape,Path=_reactNative.ART.Path;var





Wedge=function(_Component){_inherits(Wedge,_Component);











function Wedge(props){_classCallCheck(this,Wedge);var _this=_possibleConstructorReturn(this,(Wedge.__proto__||Object.getPrototypeOf(Wedge)).call(this,
props));
_this.circleRadians=Math.PI*2;
_this.radiansPerDegree=Math.PI/180;
_this._degreesToRadians=_this._degreesToRadians.bind(_this);return _this;
}_createClass(Wedge,[{key:'_degreesToRadians',value:function _degreesToRadians(









degrees){
if(degrees!==0&&degrees%360===0){
return this.circleRadians;
}
return degrees*this.radiansPerDegree%this.circleRadians;
}},{key:'_createCirclePath',value:function _createCirclePath(










or,ir){
var path=new Path();

path.move(0,or).
arc(or*2,0,or).
arc(-or*2,0,or);

if(ir){
path.move(or-ir,0).
counterArc(ir*2,0,ir).
counterArc(-ir*2,0,ir);
}

path.close();

return path;
}},{key:'_createArcPath',value:function _createArcPath(












originX,originY,startAngle,endAngle,or,ir){
var path=new Path();


var sa=this._degreesToRadians(startAngle);
var ea=this._degreesToRadians(endAngle);


var ca=sa>ea?this.circleRadians-sa+ea:ea-sa;


var ss=Math.sin(sa);
var es=Math.sin(ea);
var sc=Math.cos(sa);
var ec=Math.cos(ea);


var ds=es-ss;
var dc=ec-sc;
var dr=ir-or;



var large=ca>Math.PI;

















path.move(or+or*ss,or-or*sc).
arc(or*ds,or*-dc,or,or,large).
line(dr*es,dr*-ec);

if(ir){
path.counterArc(ir*-ds,ir*dc,ir,ir,large);
}

return path;
}},{key:'render',value:function render()

{

var startAngle=this.props.startAngle;
var endAngle=this.props.endAngle;





var innerRadius=this.props.innerRadius||0;
var outerRadius=this.props.outerRadius;var _props=

this.props,originX=_props.originX,originY=_props.originY;


var ir=Math.min(innerRadius,outerRadius);
var or=Math.max(innerRadius,outerRadius);

var path=void 0;
if(endAngle>=startAngle+360){
path=this._createCirclePath(or,ir);
}else{
path=this._createArcPath(originX,originY,startAngle,endAngle,or,ir);
}

return _react2.default.createElement(Shape,_extends({},this.props,{d:path}));
}}]);return Wedge;}(_react.Component);Wedge.propTypes={outerRadius:_react.PropTypes.number.isRequired,startAngle:_react.PropTypes.number.isRequired,endAngle:_react.PropTypes.number.isRequired,originX:_react.PropTypes.number.isRequired,originY:_react.PropTypes.number.isRequired,innerRadius:_react.PropTypes.number};exports.default=Wedge;