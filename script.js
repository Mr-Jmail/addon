function getElementsByText(text) {
    var spans = document.getElementsByClassName('left_label inl_bl'),
        results = [];
    for(var i = 0; i < spans.length; i++) {
        var content = spans[i].textContent || spans[i].innerText || '';
        if (content.indexOf(text) != -1)
            results.push(spans[i]);
    }
    return results;
}


var new_my_page;
var new_news;
var new_messages;
var new_calls;
var new_friends;
var new_groups;
var new_photoes;
var new_music;
var new_videos;
var new_clips;
var new_games;
var new_adverts;
var new_mini_apps;
var new_vk_pay;
var new_job;
var new_bookmarks;
var new_docs;
var new_add;
var new_manage;


chrome.storage.local.get('new_my_page', function(data){
    new_my_page = data.new_my_page
}) 

chrome.storage.local.get('new_news', function(data){
    new_news = data.new_news
}) 

chrome.storage.local.get('new_messages', function(data){
    new_messages = data.new_messages
}) 

chrome.storage.local.get('new_calls', function(data){
    new_calls = data.new_calls
}) 

chrome.storage.local.get('new_friends', function(data){
    new_friends = data.new_friends
}) 

chrome.storage.local.get('new_groups', function(data){
    new_groups = data.new_groups
}) 

chrome.storage.local.get('new_photoes', function(data){
    new_photoes = data.new_photoes
}) 

chrome.storage.local.get('new_music', function(data){
    new_music = data.new_music
}) 

chrome.storage.local.get('new_videos', function(data){
    new_videos = data.new_videos
}) 

chrome.storage.local.get('new_clips', function(data){
    new_clips = data.new_clips
}) 

chrome.storage.local.get('new_games', function(data){
    new_games = data.new_games
}) 

chrome.storage.local.get('new_adverts', function(data){
    new_adverts = data.new_adverts
}) 

chrome.storage.local.get('new_mini_apps', function(data){
    new_mini_apps = data.new_mini_apps
}) 

chrome.storage.local.get('new_vk_pay', function(data){
    new_vk_pay = data.new_vk_pay
}) 

chrome.storage.local.get('new_job', function(data){
    new_job = data.new_job
}) 

chrome.storage.local.get('new_bookmarks', function(data){
    new_bookmarks = data.new_bookmarks
}) 

chrome.storage.local.get('new_docs', function(data){
    new_docs = data.new_docs
}) 

chrome.storage.local.get('new_add', function(data){
    new_add = data.new_add
}) 

chrome.storage.local.get('new_manage', function(data){
    new_manage = data.new_manage
})

var my_page = getElementsByText('Моя страница')[0];
var news = getElementsByText('Новости')[0];
var messages = getElementsByText('Мессенджер')[0];
var calls = getElementsByText('Звонки')[0];
var friends = getElementsByText('Друзья')[0];
var groups = getElementsByText('Сообщества')[0];
var photoes = getElementsByText('Фотографии')[0];
var music = getElementsByText('Музыка')[0];
var videos = getElementsByText('Видео')[0];
var clips = getElementsByText('Клипы')[0];
var games = getElementsByText('Игры')[0];
var adverts = getElementsByText('Объявления')[0];
var mini_apps = getElementsByText('Мини-приложения')[0];
var vk_pay = getElementsByText('VK Pay')[0];
var job = getElementsByText('Работа')[0];
var bookmarks = getElementsByText('Закладки')[0];
var docs = getElementsByText('Файлы')[0];
var add = getElementsByText('Реклама')[0];
var manage = getElementsByText('Управление')[0];



try {
    setTimeout(() => {
        if(typeof new_my_page != "undefined")
            my_page.innerHTML = new_my_page
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_news != "undefined")
            news.innerHTML = new_news;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_messages != "undefined")
            messages.innerHTML = new_messages;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_calls != "undefined")
            calls.innerHTML = new_calls;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_friends != "undefined")
            friends.innerHTML = new_friends;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_groups != "undefined")
            groups.innerHTML = new_groups;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_photoes != "undefined")
            photoes.innerHTML = new_photoes;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_music != "undefined")
            music.innerHTML = new_music;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_videos != "undefined")
            videos.innerHTML = new_videos;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_clips != "undefined")
            clips.innerHTML = new_clips;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_games != "undefined")
            games.innerHTML = new_games;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_adverts != "undefined")
            adverts.innerHTML = new_adverts;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_mini_apps != "undefined")
            mini_apps.innerHTML = new_mini_apps;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_vk_pay != "undefined")
            vk_pay.innerHTML = new_vk_pay;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_job != "undefined")
            job.innerHTML = new_job;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_bookmarks != "undefined")
            bookmarks.innerHTML = new_bookmarks;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_docs != "undefined")
            docs.innerHTML = new_docs;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_add != "undefined")
            add.innerHTML = new_add;
    }, 500);
} catch (err) {
    console.error(err)
}

try {
    setTimeout(() => {
        if(typeof new_manage != "undefined")
            manage.innerHTML = new_manage;
    }, 500);
} catch (err) {
    console.error(err)
}