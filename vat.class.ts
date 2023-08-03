// Vat คำนวณแยกกับราคาสินค้า (excluding vat) หมายถึง ราคาสินค้าที่แสดงไว้ยังไม่รวมภาษีมูลค่าเพิ่ม ต้องจ่ายเงินเพิ่มตามภาษี vat จากป้าย
// Vat คำนวณรวมกับราคาสินค้า  (including vat) หมายถึง ราคาสินค้าที่แสดงไว้ได้บวกภาษีมูลค่าเพิ่มไว้แล้ว ไม่ต้องจ่ายเพิ่มจากป้าย

// Vat คำนวณแยกกับราคาสินค้า ราคาสินค้าที่ยังไม่รวมภาษีมูลค่าเพิ่ม (Exclude VAT)
// ราคาสินค้าที่ยังไม่รวม VAT = 100.00 บาท
// VAT 7% (100 x 7/100) 7.00 บาท
// รวมราคาสินค้าทั้งสิ้น 107.00 บาท

// Vat คำณวนรวมกับราคาสินค้า ราคาสินค้าที่รวมภาษีมูลค่าเพิ่ม (Include VAT)
// ราคาสินค้าที่ยังไม่รวม VAT = 93.46 บาท
// VAT 7% (100 x 7/107) 6.54 บาท
// รวมราคาสินค้าทั้งสิ้น 100.00 บาท

// vat 7%  =
//ราคาสินค้า  =
//ค่าภ่าษี 7% จาก ราคาสินค้า =

export class Vat {
  constructor(
    protected readonly price: number,
    protected readonly vat: number
  ) {}
}

//test
export class ExcludeVat extends Vat {
  _price?: number;
  priceVat?: number;
  constructor(public readonly price: number, public readonly vat: number) {
    super(price, vat);
  }

  handleExcludeVat() {
    const vat = (this.price * this.vat) / 100;
    console.log('🚀 ~ file: vat.class.ts:32 ~ vat:', vat.toFixed(2));
    this.priceVat = +vat.toFixed(2);
    this._price = this.price + this.priceVat;
  }
}

export class IncludeVat extends Vat {
  _price?: number;
  priceVat?: number;
  constructor(public readonly price: number, public readonly vat: number) {
    super(price, vat);
  }

  IncludeVat() {
    const vat = (this.price * this.vat) / (100 + this.vat);
    console.log('🚀 ~ file: vat.class.ts:32 ~ vat:', vat.toFixed(2));
    this.priceVat = +vat.toFixed(2);
    this._price = this.price - this.priceVat;
  }
}
