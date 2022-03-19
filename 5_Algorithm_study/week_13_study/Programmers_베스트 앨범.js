// 1. 같은 장르끼리 묶어준다.
// 2. 묶은 노래들을 재생순으로 정렬한다.
// 3. 노래를 2개까지 자르는 작업을 한다.

function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        // total : 클래식, 팝 전체 개수
        total: data.total + play,
        // songs : 재생 수 데이터, 고유 번호를 재생 수 순으로 정렬하고 2개만 추림.
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  // 그 데이터를 토탈 순으로 먼저 정렬하고 songs 데이터를 flatMap으로 묶어 index만 map으로 추려낸다.
  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}
