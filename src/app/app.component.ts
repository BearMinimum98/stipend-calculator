import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  startDate: Date = null
  endDate: Date = null
  stipend: number = null
  calculate() {
    if (this.startDate > this.endDate || this.stipend <= 0) {
      alert('wrong bounds')
      return
    }
    let out: number = (new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 0).getDate() - this.startDate.getDate()) / new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 0).getDate()
    if (this.startDate.getFullYear() === this.endDate.getFullYear()) {
      out += this.endDate.getMonth() - this.startDate.getMonth() - 1
    } else {
      out += 11 - this.startDate.getMonth()
      out += this.endDate.getMonth()
      out += (this.endDate.getFullYear() - this.startDate.getFullYear() - 1) * 12
    }
    out += (this.endDate.getDate() + 1) / new Date(this.endDate.getFullYear(), this.endDate.getMonth() + 1, 0).getDate()
    document.querySelector('#result').innerHTML = `\~\$${Math.trunc(out * (this.stipend))}`
  }
}
