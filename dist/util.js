Object.defineProperty(exports,"__esModule",{value:true});exports.

uniqueValuesInDataSet=uniqueValuesInDataSet;exports.







uniqueValuesInDataSets=uniqueValuesInDataSets;function uniqueValuesInDataSet(data){return data.reduce(function(result,d){if(result.some(function(p){return p[1]===d[1];}))return result;result.push(d);return result;},[]);}function uniqueValuesInDataSets(data,index){
var values=[];
data.forEach(function(Graph){
Graph.forEach(function(XYPair){
if(values.indexOf(XYPair[index])===-1){
values.push(XYPair[index]);
}
});
});
values.sort(function(a,b){
return a-b;
});
return values;
}