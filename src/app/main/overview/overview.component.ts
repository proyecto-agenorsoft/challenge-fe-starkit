import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/crypto.service';

@Component({
  selector: 'app-market-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {
  marketOverview: any;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getMarketOverview().subscribe(data => {
      this.marketOverview = data;
    });
  }
}
