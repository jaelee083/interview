
let tap = document.getElementById('switch');
let body = document.body;

let userPreference = localStorage.getItem('mode');

if (userPreference === 'light')
{
    body.classList.remove('dark');
    body.classList.add('light');
    tap.src = '18.png';
}

tap.addEventListener('click', function()
{
    if (body.classList.contains('dark')) 
    {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('mode', 'light');
        tap.src = '18.png';
    } 
    
    else 
    {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('mode', 'dark');
        tap.src = '17.png';
    }
});