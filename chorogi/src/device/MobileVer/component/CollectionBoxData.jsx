import { Icon } from '@iconify/react';

// 의류 수거함
const Clothes = {
  menu : '수거함 위치 알리미',
  title : '의류 수거함',
  slug : 'Clothes',
  img : '/images/Clothing collection box.png',
  icon : '/images/marker-clothes.png',
  selectedIcon : '/images/marker-clothes-white.png',
  item : [
    {
      name : '낙성대동',
      address : '서울특별시 관악구 관악로10길 15',
      lng : '126.953504',
      lat : '37.4770068'
    },
    {
      name : '난곡동',
      address : '서울특별시 관악구 난곡로20길 12',
      lng : '126.920999',
      lat : '37.4684206'
    },
    {
      name : '난향동',
      address : '서울특별시 관악구 난곡로11길 33',
      lng : '126.917566',
      lat : '37.4654990'
    },
    {
      name : '남현동',
      address : '서울특별시 관악구 남부순환로256가길 10',
      lng : '126.972385',
      lat : '37.4752921'
    },
    {
      name : '대학동',
      address : '서울특별시 관악구 대학5길 29',
      lng : '126.939480',
      lat : '37.4693598'
    },
    {
      name : '미성동',
      address : '서울특별시 관악구 난곡로41길 7',
      lng : '126.916051',
      lat : '37.4753459'
    },
  
        {
      name : '삼성동',
      address : '서울특별시 관악구 동마길 10',
      lng : '126.930227',
      lat : '37.4647054'
    },
    {
      name : '서림동',
      address : '서울특별시 관악구 복은10길 23',
      lng : '126.941952',
      lat : '37.4743436'
    },
    {
      name : '서원동',
      address : '서울특별시 관악구 남부순환로156길 9',
      lng : '126.920283',
      lat : '37.4822866'
    },
    {
      name : '신사동',
      address : '서울특별시 관악구 관천로11길 1',
      lng : '126.924645',
      lat : '37.4845510'
    },
    {
      name : '신원동',
      address : '서울특별시 관악구 남부순환로160길 13',
      lng : '126.921854',
      lat : '37.4825670'
    },
    {
      name : '인헌동',
      address : '서울특별시 관악구 낙성대역10길 23-8',
      lng : '126.963116',
      lat : '37.4732441'
    },
    {
      name : '조원동',
      address : '서울특별시 관악구 난곡로65길 24',
      lng : '126.912810',
      lat : '37.4822993'
    },
    {
      name : '청룡도',
      address : '서울특별시 관악구 관악로11길 17',
      lng : '126.951220',
      lat : '37.4776726'
    },
    {
      name : '보라매동',
      address : '서울특별시 관악구 당곡2길 107',
      lng : '126.951220',
      lat : '37.4776726'
    },
    {
      name : '은천동',
      address : '서울특별시 관악구 국회단지12길 18',
      lng : '126.942879',
      lat : '37.4886340'
    },
    {
      name : '신림동',
      address : '서울특별시 관악구 관천로16길 28',
      lng : '126.924970',
      lat : '37.4873083'
    },
    {
      name : '중앙동',
      address : '서울특별시 관악구 봉천로41길 27',
      lng : '126.947948',
      lat : '37.4839782'
    },
    {
      name : '행운동',
      address : '서울특별시 관악구 관악로24가길 16 맞은편',
      lng : '126.957038',
      lat : '37.4841802'
    },
    {
      name : '청림동',
      address : '서울특별시 관악구 청림2길 2',
      lng : '126.958664',
      lat : '37.4880912'
    },
    {
      name : '성현동',
      address : '서울특별시 관악구 관악로37길 20',
      lng : '126.956143',
      lat : '37.4878109'
    }
  ]
}

// 의류수거함 api로 가져오기
// const [items, setItems] = useState([]);

// const getClothesBox = async () => {
//   const response = await fetch('https://api.odcloud.kr/api/15076398/v1/uddi:6dec2a8d-6404-4318-8767-85419b3c45a0?page=1&perPage=10&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D');
//   const body = await response.json();
//   return body;
// }

// const handleLode = async () => {
//   const clothes = await getClothesBox();
//   const clothesBoxList = clothes.data;
//   setItems(clothesBoxList);
// }

// useEffect(() => {
//   handleLode();
// }, [])


// 폐건전지, 형광등 수거함
const BatteriesFluorescentlights = {
  menu : '수거함 위치 알리미',
  title : '폐건전지, 형광등 수거함',
  slug : 'Batteries-Fluorescent-lights',
  img : '/images/battery.png',
  icon : '/images/marker-battery.png',
  selectedIcon : '/images/marker-battery-white.png',
  item : [
    {
      name : '보라매동주민센터',
      address : '봉천로 279-8',
      lng : '126.932658',
      lat : '37.4881420'
    },
    {
      name : '적성빌라',
      address : '봉천로 13다길 8',
      lng : '126.932848',
      lat : '37.4909622'
    },
    {
      name : '은천동주민센터 주차장',
      address : '봉천로33나길 30',
      lng : '',
      lat : ''
    },
    {
      name : '해바라기아파트',
      address : '보라매로6길 33',
      lng : '126.942407',
      lat : '37.4852910'
    },
    {
      name : '보라매삼성아파트',
      address : '보라매로 62',
      lng : '126.927779',
      lat : '37.4941127'
    },
    {
      name : '관악드림타운',
      address : '성현로 80',
      lng : '126.950669',
      lat : '37.4898089'
    },
    {
      name : '국지경로당',
      address : '국회단지21길 14',
      lng : '126.941465',
      lat : '37.4902731'
    },
    {
      name : '자치회관 후문',
      address : '관악로 255-7',
      lng : '126.956584',
      lat : '37.4871984'
    },
    {
      name : '	성현동아아파트 관리사무소 옆',
      address : '관악로 285',
      lng : '126.956323',
      lat : '37.4895679'
    },
    {
      name : '	두산아파트',
      address : '양녕로 31',
      lng : '126.945923',
      lat : '37.4853288'
    }
  ]
}


// 투명페트병 수거함(수퍼빈-네프론)
let Nephron = {
  menu : '지구 살리기 Tip!',
  title : '분리수거하고 돈벌기',
  slug : 'Nephron',
  img : '/images/plastic bottle.png',
  icon : '/images/marker-plastic.png',
  selectedIcon : '/images/marker-plastic-white.png',
  item : [
    {
      name : '낙성대동주민센터',
      address : '서울특별시 관악구 낙성대로4가길 5 낙성대동주민센터',
      lng : '126.958377',
      lat : '37.4763149'
    },
    {
      name : '난곡재생활력소',
      address : '서울특별시 관악구 난곡로26나길 5',
      lng : '126.923428',
      lat : '37.4695125'
    },
    {
      name : '대학동주민센터',
      address : '서울특별시 관악구 신림로 111',
      lng : '126.936936',
      lat : '37.4705838'
    },
    {
      name : '미성경로당',
      address : '서울특별시 관악구 난곡로58길 11',
      lng : '126.915672',
      lat : '37.4802651'
    },
    {
      name : '밤골경로당',
      address : '서울특별시 관악구 인헌3가길 8',
      lng : '126.967242',
      lat : '37.4740473'
    },
    {
      name : '삼성동 자치회관',
      address : '서울특별시 관악구 호암로 520',
      lng : '126.931810',
      lat : '37.4640126'
    },
  
    {
      name : '성현동자치회관',
      address : '서울특별시 관악구 봉천동 1703-6',
      lng : '126.956618',
      lat : '37.4871984'
    },
    {
      name : '세븐일레븐 신림대학스타점',
      address : '서울특별시 관악구 호암로24길 6',
      lng : '126.933534',
      lat : '37.4698881'
    },
    {
      name : '신림동행정복지센터',
      address : '서울특별시 관악구 신림동길 14',
      lng : '126.927096',
      lat : '37.4873998'
    },
    {
      name : '신사동행정복지센터',
      address : '서울특별시 관악구 조원로 142',
      lng : '126.918086',
      lat : '37.4854025'
    },
    {
      name : '신원동주민센터',
      address : '서울특별시 관악구 신원로3길 13',
      lng : '126.927316',
      lat : '37.4815524'
    },
    {
      name : '은천동행정복지센터',
      address : '서울특별시 관악구 봉천로33나길 30',
      lng : '126.942407',
      lat : '37.4852910'
    },
    {
      name : '중앙동주민센터',
      address : '서울특별시 관악구 양녕로6다길 7',
      lng : '126.949712',
      lat : '37.4841682'
    },
    {
      name : '행운동 행정복지센터',
      address : '서울특별시 관악구 봉천동 1670-7',
      lng : '126.957007',
      lat : '37.4806302'
    }
  ]
}


// 기부하기(굿윌스토어)
const Donation = {
  menu : '지구 살리기 Tip!',
  title : '가까운 곳에 기부하기',
  slug : 'Donation',
  img : '/images/donation.png',
  icon : '/images/marker-heart.png',
  selectedIcon : '/images/marker-heart-white.png',
  item : [
    {
    name : '굿윌스토어 밀알금천점',
    address : '서울 금천구 시흥대로 350 1층',
    lng : '126.897921',
    lat : '37.4645914'
    }
  ]
}

const collectionBoxMapData = [Clothes, BatteriesFluorescentlights, Nephron, Donation];

const collectionBoxDetailData = [
  {
    menu : '수거함 위치 알리미',
    title : '의류 수거함',
    slug : 'Clothes',
    maianImg : '/images/Clothing collection box.png',
    mainTitle : '의류수거함, 왜 필요한가요?',
    mainContent : '의류수거함은 옷과 신발 등을 재활용, 재사용하며 탄소 배출을 줄이고 있어요.',
    subIcon1 : <Icon icon="ic:outline-circle" />,
    subTitle1 : '넣어도 돼요!',
    subContent1 : '의류, 신발, 일반가방, 담요, 누비이불, 커튼, 카펫 등 오물이 묻지 않은 것을 넣어주세요.',
    subIcon2 : <Icon icon="bx:x" />,
    subContent2 : '넣으면 안돼요!',
    subContent2 : '솜이불, 베개, 방석, 롤러스케이트, 바퀴가방 등을 넣으면 안돼요. 해당 품목들은 대형폐기물 배출 및 재활용품 배출 방법에 의거하여 배출해주세요.'
  }
]

export {collectionBoxMapData, collectionBoxDetailData};