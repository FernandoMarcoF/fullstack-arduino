/*
PINOUT de como conectamos el Modulo al Arduino:
RC522    ArduinoUno
SDA         D10
SCK         D13
MOSI        D11
MISO        12
IRQ         N/C
GND         GND
RST         D9
3.3V       3.3V
____________________________________________________________________________________
lCD   PINOS
LED  - GND
LED  - RESISTOR220ohm - 5V
DB7  - D2
DB6  - D4
DB5  - D5
DB4  - D6
DB3  - N/C
DB2  - N/C
DB1  - N/C
DB0  - N/C
E    - D7
RW   - GND
RS   - D8
V0   - POTENCIOMENTRO
VCC  - 5V
GND  - GND
*/
#include <SPI.h>
#include <RFID.h>
#include <Servo.h>
#include <LiquidCrystal.h>

// LDC
// Se definen los pines que son puntuales para este Modulo
// Que son el Reset y el SS (Select)
#define RST_PIN 9
#define SS_PIN 10
const int rs = 8, en = 7, d4 = 6, d5 = 5, d6 = 4, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

// Servo Motor
Servo servo_3;

// Creo la Clase RFID
RFID tarjeta_rfid(SS_PIN, RST_PIN);

int i = 0;
int ledV = A0;
int ledR = A1;
String usuario = "";

void setup() {
  Serial.begin(9600);
  SPI.begin();
  tarjeta_rfid.init();
  Serial.println("Apoye su tarjeta o tag RFID");

  // LDC
  lcd.begin(16, 2);
  lcd.setCursor(0, 0);
  lcd.print("PRUEBA SISTEMA");
  delay(1000);
  lcd.clear();

  // Motor
  servo_3.attach(3);
  servo_3.write(0);
  delay(200);
}

const String nombreUsuario() {
  while (Serial.available()) {
    // char caracter = Serial.read();
    // usuario += caracter;
    usuario = Serial.readStringUntil('\n');
  }
  return usuario;
}

void usuarioDenegado() {
  lcd.setCursor(0, 0);
  lcd.print("Denegado ");
  analogWrite(ledR, 255);
  delay(4000);
  lcd.clear();
  analogWrite(ledR, 0);
}

// void printSerial() {
//   if (usuario != "") {
//     Serial.println(usuario);
//   }
// }

void printNombreLCD() {
  lcd.setCursor(0, 0);
  lcd.print("Buenos dias: ");
  lcd.setCursor(0, 1);
  servo_3.write(180);
  lcd.print(usuario);
  analogWrite(ledV, 255);
  delay(4000);
  lcd.clear();
  analogWrite(ledV, 0);
  servo_3.write(0);
  usuario = "";
}


void leerTarjeta() {
  if (tarjeta_rfid.isCard()) {
    tarjeta_rfid.readCardSerial();
    for (int i = 0; i < 5; i++) {
      i == 4 ? Serial.println(tarjeta_rfid.serNum[i]) : Serial.print(tarjeta_rfid.serNum[i]);
    }
  }
}



void loop() {
  leerTarjeta();
  if (Serial.available()) {
    nombreUsuario();
    if (usuario == "denegado") {
      usuarioDenegado();
    } else {
      printNombreLCD();
    }
  }

  delay(1000);
}
