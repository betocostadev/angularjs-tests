// Lista Telefonica
// Using Angular CDN, no need to require the module.
angular.module('listaTelefonica', []);
angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope) {
    $scope.app = `Lista Telefonica`
    $scope.contatos = [
        {nome: 'Pedro', telefone: '99998888'},
        {nome: 'Ana', telefone: '99972833'},
        {nome: 'Maria', telefone: '97893815'},
    ];
    $scope.addContact = (contato) => {
        $scope.contatos.push(angular.copy(contato));
        // $scope.contatos.push(contato); - Somente desta forma, irá atualizar a tabela ao mesmo tempo.
        $scope.contato = '';

    }
});