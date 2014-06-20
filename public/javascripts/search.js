function OnLoad() {
	// search control 생성
	var searchControl = new GSearchControl();

	var localSearch = new GlocalSearch();
	searchControl.addSearcher(localSearch);
	searchControl.addSearcher(new GwebSearch());
	searchControl.addSearcher(new GvideoSearch());
	searchControl.addSearcher(new GblogSearch());
	searchControl.addSearcher(new GnewsSearch());

	// 지도검색을 위한 기준지역 설정
	localSearch.setCenterPoint("New York, NY");

	searchControl.draw(document.getElementById("searchcontrol"));

	// 검색
	searchControl.execute("검색하세요.");
}

GSearch.setOnLoadCallback(OnLoad);
