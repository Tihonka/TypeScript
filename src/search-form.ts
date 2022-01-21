import { renderBlock } from './lib.js'

export function renderSearchFormBlock (arrivalDate?: Date, departureDate?: Date) {
  const today: Date = new Date()
  today.setHours(0,0,0,0)
  const maxDate: Date = new Date(today.getFullYear(), today.getMonth() + 2, 0)
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" 
              value=${ arrivalDate? arrivalDate : new Date(today.setDate(today.getDate() + 1)).toLocaleDateString('en-CA') } 
              min=${ today.toLocaleDateString('en-CA') }
              max=${ maxDate.toLocaleDateString('en-CA') } name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" 
              value=${ departureDate? departureDate: new Date(today.setDate(today.getDate() + 3)).toLocaleDateString('en-CA') }
              min=${ today.toLocaleDateString('en-CA') }
              max=${ maxDate.toLocaleDateString('en-CA') } name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
