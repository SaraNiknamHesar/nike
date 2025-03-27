document.addEventListener("DOMContentLoaded", async () => {
    // async فقط چون می خواهیم از اویت استفاده کنیم اسینک رو می نویسیم 
    const fileLoader = async (element, addressElement) => {
        const elementReader = document.getElementById(element);
        try {
            const res = await fetch(addressElement);  // منتظر می‌مونیم تا فایل لود بشه
            const html = await res.text();  // منتظر می‌مونیم تا متن فایل HTML آماده بشه
            elementReader.innerHTML = html;  // محتوای فایل HTML رو داخل المنت قرار می‌دهیم
        } catch (error) {
            console.error("خطا در بارگذاری فایل:", error);  // مدیریت خطا در صورت بروز مشکل
        }
    }
    await fileLoader("header", "./src/component/header/header.html");  // منتظر می‌مونیم تا فایل بارگذاری بشه
    const humbergerMenu = document.querySelector(".humberger-menu");
    humbergerMenu.addEventListener("click", (event) => {
        event.preventDefault();
        const sliderHeaderMenu = document.querySelector(".slider-header-menu");
        console.log(sliderHeaderMenu.classList.add("hidden"));

    })

});

