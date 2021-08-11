type PayloadScheema = {
  time_unit?: string,
  time_unit_count?: number,
}

const mountPayload = (reference:string) => {
  const payload:PayloadScheema = {}

  if (reference.match(/Month/g))
    payload.time_unit = "MONTH"

  if (reference.match(/Quarter/g))
    payload.time_unit = "QUARTER"

  if (reference.match(/Year/g))
    payload.time_unit = "YEAR"

  if (reference.match(/This/g))
    payload.time_unit_count = 1
  else
    payload.time_unit_count = 2

  return payload

}

export default mountPayload
