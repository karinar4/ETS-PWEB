const ajax = new XMLHttpRequest();

ajax.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(ajax.responseText);
        display(data);
    }
};

const url = 'http://159.223.51.203/api/bio';
ajax.open("GET", url);
ajax.send();

function display(data){
    
    const nama1 = document.getElementById("nama1");
    nama1.textContent = data[0].name;
    const id1 = document.getElementById("id1");
    id1.textContent = data[0].id;

    const nama2 = document.getElementById("nama2");
    nama2.textContent = data[1].name;
    const id2 = document.getElementById("id2");
    id2.textContent = data[1].id;

    const nama3 = document.getElementById("nama3");
    nama3.textContent = data[2].name;
    const id3 = document.getElementById("id3");
    id3.textContent = data[2].id;

    const nama4 = document.getElementById("nama4");
    nama4.textContent = data[3].name;
    const id4 = document.getElementById("id4");
    id4.textContent = data[3].id;

    const nama5 = document.getElementById("nama5");
    nama5.textContent = data[4].name;
    const id5 = document.getElementById("id5");
    id5.textContent = data[4].id;

    const nama6 = document.getElementById("nama6");
    nama6.textContent = data[5].name;
    const id6 = document.getElementById("id6");
    id6.textContent = data[5].id;

    const nama7 = document.getElementById("nama7");
    nama7.textContent = data[6].name;
    const id7 = document.getElementById("id7");
    id7.textContent = data[6].id;

    const nama8 = document.getElementById("nama8");
    nama8.textContent = data[7].name;
    const id8 = document.getElementById("id8");
    id8.textContent = data[7].id;

    const nama9 = document.getElementById("nama9");
    nama9.textContent = data[8].name;
    const id9 = document.getElementById("id9");
    id9.textContent = data[8].id;

    const nama10 = document.getElementById("nama10");
    nama10.textContent = data[9].name;
    const id10 = document.getElementById("id10");
    id10.textContent = data[9].id;

    const nama11 = document.getElementById("nama11");
    nama11.textContent = data[10].name;
    const id11 = document.getElementById("id11");
    id11.textContent = data[10].id;

}