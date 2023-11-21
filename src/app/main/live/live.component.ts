import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService } from 'src/app/crypto.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})

export class LiveComponent implements OnInit {
  cryptoData: any;
  cryptoCode: string | null = null;

  constructor(private route: ActivatedRoute, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const cryptoSymbol = params['symbol'];
      if (cryptoSymbol) {
        this.cryptoService.getLiveStats(`${cryptoSymbol}-USDT`).subscribe(data => {
          this.cryptoData = data;
        });
      }
    });
  }
}


