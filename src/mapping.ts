import {
  AuctionEnded as AuctionEndedEvent,
  HighestBidIncreased as HighestBidIncreasedEvent,
  OrderBuyed as OrderBuyedEvent
} from "../generated/Auction/Auction"
import {
  AuctionEnded,
  HighestBidIncreased,
  OrderBuyed
} from "../generated/schema"

export function handleAuctionEnded(event: AuctionEndedEvent): void {
  let entity = new AuctionEnded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.orderNumber = event.params.orderNumber
  entity.initialVoucherId = event.params.initialVoucherId
  entity.finalVoucherId = event.params.finalVoucherId
  entity.winner = event.params.winner
  entity.amount = event.params.amount
  entity.save()
}

export function handleHighestBidIncreased(
  event: HighestBidIncreasedEvent
): void {
  let entity = new HighestBidIncreased(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.bidder = event.params.bidder
  entity.amount = event.params.amount
  entity.save()
}

export function handleOrderBuyed(event: OrderBuyedEvent): void {
  let entity = new OrderBuyed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.orderNumber = event.params.orderNumber
  entity.initialVoucherId = event.params.initialVoucherId
  entity.finalVoucherId = event.params.finalVoucherId
  entity.buyer = event.params.buyer
  entity.amount = event.params.amount
  entity.save()
}
