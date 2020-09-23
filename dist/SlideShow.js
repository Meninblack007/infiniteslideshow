var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _recyclerlistview=require("recyclerlistview");var _CustomBaseScrollView=_interopRequireDefault(require("./CustomBaseScrollView"));var _useDataState3=_interopRequireDefault(require("./hooks/useDataState"));var _usePlayState3=_interopRequireDefault(require("./hooks/usePlayState"));var _Utils=_interopRequireDefault(require("./Utils"));var _this=this,_jsxFileName="/Users/300067164/Documents/PWorkspace/infiniteslideshow/src/SlideShow.tsx";var itemWidth;var SlideShow=function SlideShow(_ref){var initialIndex=_ref.initialIndex,duration=_ref.duration,items=_ref.items,rowRenderer=_ref.rowRenderer,multiplier=_ref.multiplier,style=_ref.style,indicatorStyle=_ref.indicatorStyle,autoScroll=_ref.autoScroll,disableIndicator=_ref.disableIndicator,recyclerViewProps=_ref.recyclerViewProps;var multiplierValidated=items.length===1?0:multiplier;var recyclerList=(0,React.useRef)(null);var intialialScrollIndex=multiplierValidated/2*items.length+initialIndex;var _useState=(0,React.useState)(intialialScrollIndex),_useState2=(0,_slicedToArray2.default)(_useState,2),currentIndexFake=_useState2[0],setCurrentIndexFake=_useState2[1];var _useState3=(0,React.useState)(Number.NEGATIVE_INFINITY),_useState4=(0,_slicedToArray2.default)(_useState3,2),oldOffset=_useState4[0],setOldOffset=_useState4[1];var _useState5=(0,React.useState)(intialialScrollIndex),_useState6=(0,_slicedToArray2.default)(_useState5,2),selectedIndexAndroid=_useState6[0],setSelectedIndexAndroid=_useState6[1];var _usePlayState=(0,_usePlayState3.default)(autoScroll),_usePlayState2=(0,_slicedToArray2.default)(_usePlayState,2),isPlaying=_usePlayState2[0],setIsPlaying=_usePlayState2[1];var _useDataState=(0,_useDataState3.default)(items,multiplierValidated,style),_useDataState2=(0,_slicedToArray2.default)(_useDataState,2),_dataSource=_useDataState2[0],_layoutProvider=_useDataState2[1];var scrollValue=(0,React.useRef)(new _reactNative.Animated.Value(0));(0,React.useEffect)(function(){if(autoScroll&&isPlaying&&multiplierValidated>0){var timerId=setTimeout(function(){var updatedFakeIndex=(currentIndexFake+1)%(multiplierValidated*items.length+1);recyclerList.current.scrollToIndex(updatedFakeIndex,true);},duration);return function(){return clearTimeout(timerId);};}},[currentIndexFake,isPlaying,autoScroll,multiplierValidated]);var scrollToIndex=function scrollToIndex(index,animation){recyclerList.current.scrollToIndex(index,animation);};var onPageSelected=function onPageSelected(position){if(position===0||position===multiplierValidated*items.length){var centerIndex=multiplierValidated/2*items.length;console.log('Scroll reseting................... ');scrollToIndex(centerIndex,false);}else{setCurrentIndexFake(position);var _ref2=recyclerViewProps||{},_ref2$onVisibleIndice=_ref2.onVisibleIndicesChanged,onVisibleIndicesChanged=_ref2$onVisibleIndice===void 0?undefined:_ref2$onVisibleIndice;onVisibleIndicesChanged&&onVisibleIndicesChanged(position%items.length);}};var onVisibleIndicesChange=function onVisibleIndicesChange(item,p1,p2){if(_reactNative.Platform.OS==='ios'&&item.length===1)onPageSelected(item[0]);};var setScrollValue=function setScrollValue(scroll){console.log('LENGTH ---> '+items.length);var value=Number(scroll.toFixed(4))%items.length;console.log('SCROLL_ORIGINAL ---> '+value,scroll,items.length);if(value<0)value=0;if(value>items.length-1)value=currentIndexFake%items.length===0?0:items.length-1;scrollValue.current.setValue(value);};var onSCroll=function onSCroll(_ref3){var x=_ref3.nativeEvent.contentOffset.x;if(oldOffset===Number.NEGATIVE_INFINITY){setOldOffset(x);return;}var direction=(0,_Utils.default)(x,oldOffset);var count=(x/itemWidth).toFixed(4);var currentValue=direction<0?Math.ceil(count):Math.floor(count);if(selectedIndexAndroid!==currentValue){setSelectedIndexAndroid(currentValue);setOldOffset(x);console.log('Gajendra ---> '+currentValue);_reactNative.Platform.OS==='android'&&onPageSelected(currentValue);}setScrollValue(x/itemWidth);};var onItemLayout=function onItemLayout(_ref4){var width=_ref4.nativeEvent.layout.width;itemWidth=width;};var onScrollAnimationEnd=function onScrollAnimationEnd(){var _ref5=recyclerViewProps||{},onScrollEndDrag=_ref5.onScrollEndDrag;onScrollEndDrag&&onScrollEndDrag();setIsPlaying(true);};var onScrollBeginDrag=function onScrollBeginDrag(){setIsPlaying(false);};return React.createElement(_reactNative.View,{style:style,__self:_this,__source:{fileName:_jsxFileName,lineNumber:142,columnNumber:9}},_layoutProvider&&_dataSource&&React.createElement(_recyclerlistview.RecyclerListView,(0,_extends2.default)({},recyclerViewProps,{initialRenderIndex:intialialScrollIndex,onLayout:onItemLayout,onScroll:onSCroll,ref:recyclerList,isHorizontal:true,onScrollEndDrag:onScrollAnimationEnd,onScrollBeginDrag:onScrollBeginDrag,externalScrollView:_CustomBaseScrollView.default,dataProvider:_dataSource,layoutProvider:_layoutProvider,rowRenderer:rowRenderer,onVisibleIndicesChanged:onVisibleIndicesChange,__self:_this,__source:{fileName:_jsxFileName,lineNumber:143,columnNumber:48}})));};SlideShow.defaultProps={initialIndex:0,duration:3000,multiplier:0,autoScroll:true,disableIndicator:false,style:{width:_reactNative.Dimensions.get('screen').width,height:_reactNative.Dimensions.get('screen').height},indicatorStyle:{alignItems:'center',position:'absolute',bottom:10,left:0,right:0}};var _default=SlideShow;exports.default=_default;