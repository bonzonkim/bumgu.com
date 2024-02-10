import { WorkGridItemProps } from '../../types/types';

import thumbnailLively from '../../public/images/works/Lively_main.png';
import thumbnailWhatCandy from '../../public/images/works/whatCandy.png';
import thumbnailSpotify from '../../public/images/works/know-your-spotify.png';

export const projectGridItemProps: WorkGridItemProps[] = [
  {
    title: 'Lively',
    thumbnail: thumbnailLively,
    gitRepo: 'Lively',
    description:
      'Lively는 지역 커뮤니티를 표방한 실시간 위치 기반 교통 상황을 보여주는 맵이 있으며 기부, 질문 등 지역 커뮤니티에 필요한 게시판이 있습니다.',
  },
  {
    title: 'what candy',
    thumbnail: thumbnailWhatCandy,
    gitRepo: 'what-candy',
    description:
      '응답에 따라 성격 유형을 탕후루에 비교해 분류하는 심리테스트 웹 앱',
  },
  {
    title: 'know your spotify',
    thumbnail: thumbnailSpotify,
    gitRepo: 'know-your-spotify',
    description:
      'Spotify API를 이용해 유저의 최근 많이들은 노래와 아티스트를 보여주는 웹 앱 입니다.',
  },
];
