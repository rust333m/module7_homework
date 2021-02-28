// function Gadjets(deviceName) {
//   this.deviceName = deviceName
// }
class Mobile {
  constructor(deviceName) {
    this.deviceName = deviceName;
  }

}
class Smartphone extends Mobile {
  constructor(deviceName, model, batteryCapacity, size, weight) {
    super(deviceName);
    this.model = model;
    this.batteryCapacity = batteryCapacity;
    this.size = size;
    this.weight = weight;
  }
  getSmartphoneInfo() {
    console.log(`Device Info \n Device: ${this.deviceName},\n Model: ${this.model},\n Battery: ${this.batteryCapacity},\n Size: ${this.size},\n Weight: ${this.weight}`);
    // return 'Device Info \n Device: ' + this.deviceName + ',\n Model: ' + this.model + ',\n Battery: ' + this.batteryCapacity + ',\n Size: ' + this.size + ',\n Weight: ' + this.weight;
  }
  unlock() {
    // return this.deviceName + 'is Unlocked';
    console.log(this.deviceName + ' is Unlocked');
  }
  lock() {
    // return this.deviceName + 'is Locked';
    console.log(this.deviceName + ' is Locked')
  }
  setAlarm(time) {
    // return 'You set the alarm for' + this.time;
    console.log('You set the alarm for ' + time)

  }
  writeMessage(mail, message) {
    // return 'Thank you!\nYour message: "' + this.message + '", \nhas been sent to -> ' + this.mail;
    console.log(`Thank you!\nYour message: "${message}", \nhas been sent to -> ${mail}.`)
  }
}

const iphone = new Smartphone('iPhone', '12 mini', '2227 mAh', '5.4 inches', '135 g');
iphone.getSmartphoneInfo()
// console.log(iphone.writeMessage('rust333m@gmail.com', 'Congratulations! YOU WON THE LOTTERY!'));
iphone.unlock();
iphone.setAlarm('6:30 AM');
iphone.writeMessage('rust333m@gmail.com', 'Congratulations! YOU WON THE LOTTERY!')
iphone.lock();

// Mobile.prototype = new Gadjets()

// Gadjets.prototype.getPhoneInfo = function () {
//   console.log(`Device Info \n Device: ${this.deviceName},\n Model: ${this.model},\n Battery: ${this.batteryCapacity},\n Size: ${this.size},\n Weight: ${this.weight}`)
// }
// const iphone = new Mobile('iPhone', '12 mini', '2227 mAh', '5.4 inches', '135 g')
// const samsung = new Mobile('Samsung', 'S21 Plus', '4000 mAh', ' 6.7 inches', '200 g')

// iphone.unlock();
// iphone.setAlarm('6:00 AM')
// iphone.writeMessage('rust333m@gmail.com', 'Congratulations! YOU WON THE LOTTERY!')
// iphone.lock();

// iphone.getPhoneInfo();
// samsung.getPhoneInfo();
// console.log(iphone);

