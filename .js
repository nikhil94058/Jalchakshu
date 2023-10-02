import React from "react";
import './Comp.css'
export function star() {
  return <div class="rating">
    <input type="radio" name="rating" id="star5" /><label for="star5"></label>
    <input type="radio" name="rating" id="star4" /><label for="star4"></label>
    <input type="radio" name="rating" id="star3" /><label for="star3"></label>
    <input type="radio" name="rating" id="star2" /><label for="star2"></label>
    <input type="radio" name="rating" id="star1" /><label for="star1"></label>
  </div>

}