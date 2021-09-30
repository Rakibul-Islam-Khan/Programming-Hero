// Arsenal
const loadTeam = async () => {
    const input = document.getElementById('input-filed');
    const search = input.value;
    input.value = '';
    if (search == '') {
        alert('Search Your Favorite club')
    } else {
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${search}`
        const res = (await fetch(url));
        const data = await res.json();
        teamsData(data.teams);
    }
}
const teamsData = (data) => {
    const teamCard = document.getElementById('team-card');
    teamCard.textContent = '';
    data.forEach((team) => {
        console.log(team);
        const div = document.createElement('div');
        div.classList.add('box');
        div.innerHTML = `
        <div class="card h-100 shadow">
            <img src="${team.strTeamBadge}" class="p-4 mx-auto" alt="..." width='250px'>
            <div class="card-body">
                <h5 class="card-title">${team.strTeam}</h5>
                <p class="card-text" style='text-align:justify'>${team.strDescriptionEN.slice(0,250)}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${team.strCountry}">See Club Details</button>
            </div>
        </div>


        <div class="modal fade" id="${team.strCountry}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Club Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                   <div class="card h-100">
                   <img src="${team.strTeamBadge}" class="p-4 mx-auto" alt="..." width='250px'>
                <div class="card-body">
                    <h5 class="card-title">${team.strTeam}</h5>
                    <p class="card-text" style='text-align:justify'>${team.strDescriptionEN.slice(0, 250)}</p>
                    <a href='https://${team.strWebsite}' target='_blank'  class='fs-3 me-3'><i class="bi bi-link-45deg"></i></a>
                    <a href='https://${team.strFacebook}' target='_blank'  class='fs-3 me-3'><i class="bi bi-facebook"></i></a>
                    <a href='https://${team.strInstagram}' target='_blank'  class='fs-3 me-3'><i class="bi bi-instagram"></i></a>
            </div>
        </div>
            </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
        `
        teamCard.appendChild(div);
    })
}