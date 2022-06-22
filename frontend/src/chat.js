import React from 'react';

function Chat() {

  return (

    <div>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Menu</h5>

          <button id="btn-players" type="button" class="btn btn-info m-2">Undefined</button>

          <button id="btn-criarPartida" type="button" class="btn btn-info m-2">Undefined</button>

          <button id="btn-limparMesa" type="button" class="btn btn-info m-2">Undefined</button>

          <button id="btn-limparMesa" type="button" class="btn btn-info m-2">Undefined</button>

          <button id="btn-limparMesa" type="button" class="btn btn-info m-2">Undefined</button>

          <button id="btn-limparMesa" type="button" class="btn btn-info m-2">Undefined</button>

          <button id="btn-limparMesa" type="button" class="btn btn-info m-2">Undefined</button>

          <button id="btn-limparMesa" type="button" class="btn btn-info m-2">Undefined</button>

          <button id="btn-limparMesa" type="button" class="btn btn-info m-2">Undefined</button>

          <button id="btn-limparMesa" type="button" class="btn btn-info m-2">Undefined</button>

          <button id="btn-limparMesa" type="button" class="btn btn-info m-2">Undefined</button>

        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            Menu</button>
        </div>
      </nav>

      <div id="mesa">

        <div id="carta1">

          <div id="frenteCarta1">frente1</div>
          <div id="versoCarta1">verso1</div>

        </div>

        <div id="carta2">

          <div id="frenteCarta2">frente2</div>
          <div id="versoCarta2">verso2</div>

        </div>

        <div id="carta3">

          <div id="frenteCarta3">frente3</div>
          <div id="versoCarta3">verso3</div>

        </div>

      </div>

    </div>

  );
}

export default Chat