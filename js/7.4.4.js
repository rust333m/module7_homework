function Gadjets(deviceName) {
  this.deviceName = deviceName
}

Gadjets.prototype.unlock = function () {
  console.log(`${this.deviceName} is Unlocked`)
}

Gadjets.prototype.lock = function () {
  console.log(`${this.deviceName} is Locked`)
}

Gadjets.prototype.setAlarm = function (time) {
  console.log(`You set the alarm for ${time}`)
}

Gadjets.prototype.writeMessage = function (mail, message) {
  console.log(`Thank you!\nYour message: "${message}", \nhas been sent to -> ${mail}.`)
}

function Mobile(deviceName, model, batteryCapacity, size, weight) {
  this.deviceName = deviceName,
    this.model = model,
    this.batteryCapacity = batteryCapacity,
    this.size = size,
    this.weight = weight
}

Mobile.prototype = new Gadjets()

Gadjets.prototype.getPhoneInfo = function () {
  console.log(`Device Info \n Device: ${this.deviceName},\n Model: ${this.model},\n Battery: ${this.batteryCapacity},\n Size: ${this.size},\n Weight: ${this.weight}`)
}
const iphone = new Mobile('iPhone', '12 mini', '2227 mAh', '5.4 inches', '135 g')
const samsung = new Mobile('Samsung', 'S21 Plus', '4000 mAh', ' 6.7 inches', '200 g')

iphone.unlock();
iphone.setAlarm('6:00 AM')
iphone.writeMessage('rust333m@gmail.com', 'Congratulations! YOU WON THE LOTTERY!')
iphone.lock();

iphone.getPhoneInfo();
samsung.getPhoneInfo();
console.log(iphone);

// function mobile(deviceName, mobileModel, batteryCapacity, camera) {
//   this.deviceName = deviceName,
//     this.mobileModel = mobileModel,
//     this.batteryCapacity = batteryCapacity,
//     this.camera = camera,
// }