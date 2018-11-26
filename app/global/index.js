import { widthRatio, scaleSize } from '../utils/ScreenUtil'; // 自适应比例
import StatusBarAutoHeight from '../components/StatusBarAutoHeight'
// import Images from '../assets/images/Images'

// 自适应比例
global.w = widthRatio;
global.h = widthRatio;
global.p = scaleSize;

// 自定义状态栏
global.GStatusBar = StatusBarAutoHeight;

// 全局图片
// global.Images = Images;
