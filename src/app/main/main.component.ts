import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  coins: any[] = [];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getCoins().subscribe(data => {
      this.coins = data.slice(0, 20);
    });
  }
}
