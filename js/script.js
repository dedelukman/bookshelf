document.addEventListener("DOMContentLoaded", function() {

    const submitForm = document.getElementById("inputBook");

    submitForm.addEventListener("submit", function(event) {
        event.preventDefault();
        addBookShelf();
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }

    const searchForm = document.getElementById("searchBook");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let searchKey = document.getElementById("searchBookTitle").value.toUpperCase();
        let book_list = document.getElementsByClassName("book_list");
        for (let i = 0; i < book_list.length; i++) {
            let book_item = book_list[i].getElementsByClassName("book_item")
            for (let j = 0; j < book_item.length; j++) {
                let title = book_item[j].getElementsByTagName("h3")[0].innerText
                if (title.toUpperCase().indexOf(searchKey) > -1) {
                    book_item[j].style.display = "";
                } else {
                    book_item[j].style.display = "none";
                }
            }
        }


    });



});

document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil di simpan.");
});

document.addEventListener("ondataloaded", () => {
    refreshDataFromBookShelfs();
});


function changeBookSubmit() {
    const bookIsComplete = document.getElementById("inputBookIsComplete").checked;
    if (bookIsComplete) {
        document.getElementById("bookSubmit").firstElementChild.innerHTML = "Selesai dibaca";
    } else {
        document.getElementById("bookSubmit").firstElementChild.innerHTML = "Belum selesai dibaca";
    }
}