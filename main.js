import CameraA from './capteur/capteur_A/CameraA.js'
import ThermalSensorB from './capteur/capteur_B/ThermalSensorB.js'
import ThermalSensorBAdapter from './adapter/ThermalSensorBAdapter.js'
import Room from './building/Room.js'
import EmailNotification from './notification/EmailNotification.js'

const cam = new CameraA("Salon")
const thermal = new ThermalSensorB("Couloir")
const adaptedThermal = new ThermalSensorBAdapter(thermal, "Couloir")

const room = new Room("Salon")
room.addSensor(cam)
room.addSensor(adaptedThermal)

room.addNotification(new EmailNotification("admin@gmail.com"))

room.checkSensors()
