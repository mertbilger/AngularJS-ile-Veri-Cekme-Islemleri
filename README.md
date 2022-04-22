- Öncelikle AngularJs kullanmak için adres belirtmemiz gerekli veya bilgisayarınıza kurabilirsiniz.
- Ben adres belirtmeyi tercih ettiğimden https://angularjs.org/ adresinden Download AngularJs ' e tıklayarak CDN alanını kopyaladım.
- Kopyaladığımız bağlantıyı Html dosyamıza bağlıyoruz.
```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js</script>
```
- Daha sonra Css ve Javascript dosyalarımız da Html dosyamıza bağlıyoruz.
```html
<script src="js/app.js"></script>
<link href="tablo.css"type="text/css" rel="stylesheet"/>
```

- **NOT**: AngularJS adresini belirttikten sonra javascript dosyamızı bağlıyoruz.


- AngularJS, bir tek sayfa üzerinde etkileşim sağlayabilmemiz için birbirinden bağımsız farklı parçalar üzerinde bizlere çalışma imkanı vermektedir. Dolayısıyla bu parçaları bir bütün olarak bir araya getirme ihtiyacı doğduğu için modül yapısı kullanmamız gerekli.
```html
var app = angular.module("App",[]);

app.controller("Controller", function($scope,$http){

});
```
- Önemli olan Html dosyamızla Javascript dosyamızı bağlarken tanımlanmış olan controller body içerisinine `ng-app` ve `ng-controller` tanımlamaları yapıyoruz.
```html
<body ng-app="App" ng-controller="Controller">
```
- `ng-app` AngularJs'in hangi etiketler arasında aktif olarak çalışıcağını gösterir. 
- `ng-controller` uygulama denetleyicisini tanımlar.,
- AngularJS `$http` hizmeti, sunucuya bir istekte bulunur ve bir yanıt döndürür yada başka bir deyişle uzak sunuculardan veri okumak için kullanılan AngularJS hizmetidir.
- Daha sonra `$http` hizmetini kullanarak veri çekme işlemini yapalım.
```html
$http.get("https://jsonplaceholder.typicode.com/users").then(function(response) {
          $scope.users = response.data;
        });
```
- Verileri https://jsonplaceholder.typicode.com/ adresinden kullanıcılar bölümünden çektim.
- `$http.get()https://jsonplaceholder.typicode.com/users` adresinden JSON verilerini okur  ve response.data ile okunan veriler döndürülür,okunan veriler de $scope.users   içinde saklanır.
- Artık listemizi de hazırlayalım.
```html
<table id="table1">
      <tr>
          <th>İsim Soyisim</th>
          <th>E-mail</th>
          <th>Telefon</th>
          <th>Web Site</th>
      </tr>
      <tr ng-repeat="item in users">
          <td>{{item.name}}</td>        //item altındaki name
          <td>{{item.email}}</td>       //item altındaki email
          <td>{{item.phone}}</td>       //item altındaki phone
          <td>{{item.website}}</td>     //item altındaki website

```
- `ng-repeat="item in users"` tekrar etmesini istediğimiz yer için kullanıyoruz(satır).




