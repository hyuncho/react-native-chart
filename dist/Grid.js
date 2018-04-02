Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Grid.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _util=require('./util');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Grid=function(_Component){_inherits(Grid,_Component);function Grid(){_classCallCheck(this,Grid);return _possibleConstructorReturn(this,(Grid.__proto__||Object.getPrototypeOf(Grid)).apply(this,arguments));}_createClass(Grid,[{key:'render',value:function render()

















{var _this2=this;
if(!this.props.showGrid)return null;
var horizontalRange=[];
var verticalRange=[];
var xData=(0,_util.uniqueValuesInDataSets)(this.props.data||[[]],0);
var yData=(0,_util.uniqueValuesInDataSets)(this.props.data||[[]],1);
var horizontalSteps=yData.length<this.props.verticalGridStep?yData.length:this.props.verticalGridStep;
var stepsBetweenVerticalLines=this.props.horizontalGridStep?Math.round(xData.length/this.props.horizontalGridStep):1;
if(stepsBetweenVerticalLines<1)stepsBetweenVerticalLines=1;

for(var i=horizontalSteps;i>0;i--){horizontalRange.push(i);}
for(var _i=xData.length-1;_i>0;_i-=stepsBetweenVerticalLines){verticalRange.push(_i);}

var containerStyle={width:this.props.width,height:this.props.height,position:'absolute',left:0};

var intendedLineWidth=this.props.gridLineWidth;
if(this.props.gridLineWidth<1){
intendedLineWidth=_reactNative.StyleSheet.hairlineWidth;
}

var horizontalGridStyle={
height:this.props.height/this.props.verticalGridStep,
width:this.props.width,
borderTopColor:this.props.gridColor,
borderTopWidth:intendedLineWidth};


var verticalGridStyle={
height:this.props.height+1,
width:this.props.width/(xData.length-1)*stepsBetweenVerticalLines,
borderRightColor:this.props.gridColor,
borderRightWidth:intendedLineWidth};


return(
_react2.default.createElement(_reactNative.View,{style:containerStyle,__source:{fileName:_jsxFileName,lineNumber:59}},
function(){
if(_this2.props.hideHorizontalGridLines)return null;
return(
_react2.default.createElement(_reactNative.View,{style:{position:'absolute',flexDirection:'column',justifyContent:'space-around'},__source:{fileName:_jsxFileName,lineNumber:63}},
horizontalRange.map(function(_,i){return _react2.default.createElement(_reactNative.View,{key:i,style:horizontalGridStyle,__source:{fileName:_jsxFileName,lineNumber:64}});})));


}(),
function(){
if(_this2.props.hideVerticalGridLines)return null;
return(
_react2.default.createElement(_reactNative.View,{style:{flexDirection:'row',position:'absolute',justifyContent:'space-around'},__source:{fileName:_jsxFileName,lineNumber:71}},
verticalRange.map(function(_,i){return _react2.default.createElement(_reactNative.View,{key:i,style:verticalGridStyle,__source:{fileName:_jsxFileName,lineNumber:72}});})));


}()));


}}]);return Grid;}(_react.Component);Grid.propTypes={showGrid:_propTypes2.default.bool,data:_propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.array)).isRequired,verticalGridStep:_propTypes2.default.number.isRequired,horizontalGridStep:_propTypes2.default.number,gridLineWidth:_propTypes2.default.number,gridColor:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),hideHorizontalGridLines:_propTypes2.default.bool,hideVerticalGridLines:_propTypes2.default.bool,height:_propTypes2.default.number,width:_propTypes2.default.number,type:_propTypes2.default.oneOf(['line','bar','pie']).isRequired};Grid.defaultProps={};exports.default=Grid;