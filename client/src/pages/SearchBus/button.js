import map from './images/map.png'
import { RiDeleteBack2Fill } from 'react-icons/ri'

export const initButtons = [
  { text: '選擇縣市', img: map, className: 'white selectCity' },
  { text: '手動輸入', className: 'manual' },
  { text: '紅', className: '' },
  { text: '藍', className: '' },
  { text: 1, className: 'white' },
  { text: 2, className: 'white' },
  { text: 3, className: 'white' },
  { text: '綠', className: '' },
  { text: '棕', className: '' },
  { text: 4, className: 'white' },
  { text: 5, className: 'white' },
  { text: 6, className: 'white' },
  { text: '橘', className: '' },
  { text: '小', className: '' },
  { text: 7, className: 'white' },
  { text: 8, className: 'white' },
  { text: 9, className: 'white' },
  { text: '幹線', className: '' },
  { text: '更多', className: '' },
  { text: 'c', className: '' },
  { text: 0, className: 'white' },
  { text: <RiDeleteBack2Fill />, className: '' },
]
export const selectCityButtons = [
  { text: '台北市', name: 'Taipei', className: '' },
  { text: '新北市', name: 'NewTaipei', className: '' },
  { text: '基隆市', name: 'Keelung', className: '' },
  { text: '桃園市', name: 'Taoyuan', className: '' },
  { text: '新竹市', name: 'Hsinchu', className: '' },
  { text: '新竹縣', name: 'HsinchuCounty', className: '' },
  { text: '苗栗縣', name: 'MiaoliCountry', className: '' },
  { text: '台中市', name: 'Taichung', className: '' },
  { text: '南投縣', name: 'NantouCounty', className: '' },
  { text: '彰化縣', name: 'ChanghuaCounty', className: '' },
  { text: '雲林縣', name: 'YunlinCountry', className: '' },
  { text: '嘉義市', name: 'Chiayi', className: '' },
  { text: '嘉義縣', name: 'ChiayiCountry', className: '' },
  { text: '台南市', name: 'Tainan', className: '' },
  { text: '高雄市', name: 'Kaohsiung', className: '' },
  { text: '屏東縣', name: 'PingtungCountry', className: '' },
  { text: '台東縣', name: 'TaitungCountry', className: '' },
  { text: '花蓮縣', name: 'HualienCountry', className: '' },
  { text: '宜蘭縣', name: 'YilanCountry', className: '' },
  { text: '澎湖縣', name: 'PenghuCountry', className: '' },
  { text: '金門縣', name: 'KinmenCountry', className: '' },
  { text: '連江縣', name: 'LienchiangCountry', className: '' },
  { text: '設定', name: '', className: 'set' },
]
export const moreButtons = [
  { text: 'F', className: '' },
  { text: 'R', className: '' },
  { text: 'T', className: '' },
  { text: '快', className: '' },
  { text: '內科', className: '' },
  { text: '跳蛙', className: '' },
  { text: '通勤', className: '' },
  { text: '南軟', className: '' },
  { text: '先導', className: '' },
  { text: '夜間', className: '' },
  { text: '市民', className: '' },
  { text: '其他', className: '' },
  { text: '回上一頁', className: 'set' },
]