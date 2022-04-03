document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("save").addEventListener("click", save_options);
});





chrome.storage.local.get('new_my_page', function(data){
    if(typeof data.new_my_page != "undefined"){
        document.getElementsByName('new_my_page')[0].value = data.new_my_page
    }
    else {
        document.getElementsByName('new_my_page')[0].value = "Моя страница"
    }
})

chrome.storage.local.get('new_news', function(data){
    if(typeof data.new_news != "undefined") {
        document.getElementsByName('new_news')[0].value = data.new_news
    }
    else {
        document.getElementsByName('new_news')[0].value = "Новости"
    }
})

chrome.storage.local.get('new_messages', function(data){
    if(typeof data.new_messages != "undefined") {
        document.getElementsByName('new_messages')[0].value = data.new_messages
    }
    else {
        document.getElementsByName('new_messages')[0].value = "Мессенджер"
    }
})

chrome.storage.local.get('new_calls', function(data){
    if(typeof data.new_calls != "undefined") {
        document.getElementsByName('new_calls')[0].value = data.new_calls
    }
    else {
        document.getElementsByName('new_calls')[0].value = "Звонки"
    }
})

chrome.storage.local.get('new_friends', function(data){
    if(typeof data.new_friends != "undefined") {
        document.getElementsByName('new_friends')[0].value = data.new_friends
    }
    else {
        document.getElementsByName('new_friends')[0].value = "Друзья"
    }
})

chrome.storage.local.get('new_groups', function(data){
    if(typeof data.new_groups != "undefined") {
        document.getElementsByName('new_groups')[0].value = data.new_groups
    }
    else {
        document.getElementsByName('new_groups')[0].value = "Сообщества"
    }
})

chrome.storage.local.get('new_photoes', function(data){
    if(typeof data.new_photoes != "undefined") {
        document.getElementsByName('new_photoes')[0].value = data.new_photoes
    }
    else {
        document.getElementsByName('new_photoes')[0].value = "Фотографии"
    }
})

chrome.storage.local.get('new_music', function(data){
    if(typeof data.new_music != "undefined") {
        document.getElementsByName('new_music')[0].value = data.new_music
    }
    else {
        document.getElementsByName('new_music')[0].value = "Музыка"
    }
})

chrome.storage.local.get('new_videos', function(data){
    if(typeof data.new_videos != "undefined") {
        chrome.storage.local.get('new_videos', function(data){
            document.getElementsByName('new_videos')[0].value = data.new_videos
        }) 
    }
    else {
        document.getElementsByName('new_videos')[0].value = "Видео"
    }
})

chrome.storage.local.get('new_clips', function(data){
    if(typeof data.new_clips != "undefined") {
        chrome.storage.local.get('new_clips', function(data){
            document.getElementsByName('new_clips')[0].value = data.new_clips
        }) 
    }
    else {
        document.getElementsByName('new_clips')[0].value = "Клипы"
    }
})

chrome.storage.local.get('new_games', function(data){
    if(typeof data.new_games != "undefined") {
        chrome.storage.local.get('new_games', function(data){
            document.getElementsByName('new_games')[0].value = data.new_games
        }) 
    }
    else {
        document.getElementsByName('new_games')[0].value = "Игры"
    }
})

chrome.storage.local.get('new_adverts', function(data){
    if(typeof data.new_adverts != "undefined") {
        chrome.storage.local.get('new_adverts', function(data){
            document.getElementsByName('new_adverts')[0].value = data.new_adverts
        }) 
    }
    else {
        document.getElementsByName('new_adverts')[0].value = "Объявления"
    }
})

chrome.storage.local.get('new_mini_apps', function(data){
    if(typeof data.new_mini_apps != "undefined") {
        chrome.storage.local.get('new_mini_apps', function(data){
            document.getElementsByName('new_mini_apps')[0].value = data.new_mini_apps
        }) 
    }
    else {
        document.getElementsByName('new_mini_apps')[0].value = "Мини-приложения"
    }
})

chrome.storage.local.get('new_vk_pay', function(data){
    if(typeof data.new_vk_pay != "undefined") {
        chrome.storage.local.get('new_vk_pay', function(data){
            document.getElementsByName('new_vk_pay')[0].value = data.new_vk_pay
        }) 
    }
    else {
        document.getElementsByName('new_vk_pay')[0].value = "VK Pay"
    }
})

chrome.storage.local.get('new_job', function(data){
    if(typeof data.new_job != "undefined") {
        chrome.storage.local.get('new_job', function(data){
            document.getElementsByName('new_job')[0].value = data.new_job
        }) 
    }
    else {
        document.getElementsByName('new_job')[0].value = "Работа"
    }
})

chrome.storage.local.get('new_bookmarks', function(data){
    if(typeof data.new_bookmarks != "undefined") {
        chrome.storage.local.get('new_bookmarks', function(data){
            document.getElementsByName('new_bookmarks')[0].value = data.new_bookmarks
        }) 
    }
    else {
        document.getElementsByName('new_bookmarks')[0].value = "Закладки"
    }
})

chrome.storage.local.get('new_docs', function(data){
    if(typeof data.new_docs != "undefined") {
        chrome.storage.local.get('new_docs', function(data){
            document.getElementsByName('new_docs')[0].value = data.new_docs
        }) 
    }
    else {
        document.getElementsByName('new_docs')[0].value = "Файлы"
    }
})

chrome.storage.local.get('new_add', function(data){
    if(typeof data.new_add != "undefined") {
        chrome.storage.local.get('new_add', function(data){
            document.getElementsByName('new_add')[0].value = data.new_add
        }) 
    }
    else {
        document.getElementsByName('new_add')[0].value = "Реклама"
    }
})

chrome.storage.local.get('new_manage', function(data){
    if(typeof data.new_manage != "undefined") {
        chrome.storage.local.get('new_manage', function(data){
            document.getElementsByName('new_manage')[0].value = data.new_manage
        }) 
    }
    else {
        document.getElementsByName('new_manage')[0].value = "Управление"
    }
})


function save_options() {
    if(document.getElementById('new_my_page').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_my_page: document.getElementById('new_my_page').value})
    if(document.getElementById('new_news').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_news: document.getElementById('new_news').value})
    if(document.getElementById('new_messages').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_messages: document.getElementById('new_messages').value})
    if(document.getElementById('new_calls').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_calls: document.getElementById('new_calls').value})
    if(document.getElementById('new_friends').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_friends: document.getElementById('new_friends').value})
    if(document.getElementById('new_groups').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_groups: document.getElementById('new_groups').value})
    if(document.getElementById('new_photoes').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_photoes: document.getElementById('new_photoes').value})
    if(document.getElementById('new_music').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_music: document.getElementById('new_music').value})
    if(document.getElementById('new_videos').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_videos: document.getElementById('new_videos').value})
    if(document.getElementById('new_clips').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_clips: document.getElementById('new_clips').value})
    if(document.getElementById('new_games').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_games: document.getElementById('new_games').value})
    if(document.getElementById('new_adverts').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_adverts: document.getElementById('new_adverts').value})
    if(document.getElementById('new_mini_apps').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_mini_apps: document.getElementById('new_mini_apps').value})
    if(document.getElementById('new_vk_pay').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_vk_pay: document.getElementById('new_vk_pay').value})
    if(document.getElementById('new_job').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_job: document.getElementById('new_job').value})
    if(document.getElementById('new_bookmarks').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_bookmarks: document.getElementById('new_bookmarks').value})
    if(document.getElementById('new_docs').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_docs: document.getElementById('new_docs').value})
    if(document.getElementById('new_add').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_add: document.getElementById('new_add').value})
    if(document.getElementById('new_manage').value.replace(/\s/g, '') != "") 
        chrome.storage.local.set ({new_manage: document.getElementById('new_manage').value})
}