import { BigInt } from "@graphprotocol/graph-ts"
import { ExampleContract, ExampleEvent } from "../generated/ExampleContract/ExampleContract"
import { ExampleEntity } from "../generated/schema"

export function handleExampleEvent(event: ExampleEvent): void {
  let entity = ExampleEntity.load(event.params.id.toHexString())
  if (!entity) {
    entity = new ExampleEntity(event.params.id.toHexString())
  }
  entity.data = event.params.data
  entity.save()
}
