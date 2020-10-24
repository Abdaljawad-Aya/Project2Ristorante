// Saving data on Session Storage // 

function save() {
  var Name = document.getElementById('Name_1').value
  var Password = document.getElementById('Password_1').value
  var Email = document.getElementById('Email_1').value
  var date = document.getElementById('date_1').value
  var country = document.getElementById('country').value
  var number = document.getElementById('number_1').value

  sessionStorage.setItem('Name', Name)
  sessionStorage.setItem('Password', Password)
  sessionStorage.setItem('Email', Email)
  sessionStorage.setItem('country', country)
  sessionStorage.setItem('date', date)
  sessionStorage.setItem('number', number)
  // console.log('Name:' + Name)
  // console.log('Paswword:' + Password)
  // console.log('Email:' + Email)
  // console.log('country:' + country)
  // console.log('date: ' + date)
  // console.log('number:' + number)
}
function newFunction() {
  document.getElementById('btnClear').reset()
  sessionStorage.clear('btnClear', btnClear)
}


function signin() {
  var UserName_1 = document.getElementById('userName').value
  const button = document.querySelector('.BtnSignIn')
  if (UserName_1 == sessionStorage.getItem('Name')) {
    button.disable = false
  } else {
    button.disable = true
  }
}

// Animation For The Form //

$('.message a').click(function () {
  $('form').animate({ height: 'toggle', opacity: 'toggle' })
})

// to start using regex //

var loginform = document.getElementById('login-form')
var username = document.getElementById('username')
var usernameErrPara = document.getElementById('username-err')
var password = document.getElementById('password')
var passwordErrPara = document.getElementById('password-err')

// UserName Validation //

username.addEventListener('input', function (e) {
  var pattern = /^[\w]{6,8}$/
  var currentValue = e.target.value
  var valid = pattern.test(currentValue)
  if (valid) {
    usernameErrPara.style.display = 'none'
  } else {
    usernameErrPara.style.display = 'block'
  }
})

// Password Validation //

password.addEventListener('input', function (b) {
  var pattern = /^[\w]{6,10}$/
  var currentValue = b.target.value
  var valid = pattern.test(currentValue)
  if (valid) {
    passwordErrPara.style.display = 'none'
  } else {
    passwordErrPara.style.display = 'block'
  }
})

// My Attempts connect checkbox to the Create buttons //

// $(function () {
//   var button = $('#Create')
//   button.attr('disabled', 'disabled')
//   $('#CheckBox').change(function (c) {
//     if (this.checked) {
//       button.removeAttr('disables')
//     } else {
//       button.attr('disabled', 'disabled')
//     }
//   })
// })

// it worked but there is something i cant put my finger on //

function EnableDisable(CheckBox) {
  var Create = document.getElementById(CheckBox)
  Create.disable = CheckBox.checked ? false 
  if (!Create.disabled) {
    Create.focus()
  }
}

// function myOnClickFn() {
//   document.Iocation.href = 'index.html'
// }

// var regex = /^[\w]{6,8}$/
// var str = 'userna'
// regex.test(str)

// str = 'username12345'
// regex.test(str)

