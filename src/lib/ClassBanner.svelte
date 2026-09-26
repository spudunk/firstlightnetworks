<script lang="ts">
  const TIME_ZONE = "America/New_York";
  const JOIN_UNTIL_HOUR = 11;

  const weekdayByName: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  function easternNow(date = new Date()) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: TIME_ZONE,
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    }).formatToParts(date);

    const value = (type: Intl.DateTimeFormatPartTypes) =>
      parts.find((part) => part.type === type)?.value ?? "0";

    return {
      day: weekdayByName[value("weekday")] ?? 0,
      hour: Number(value("hour")),
    };
  }

  const { day, hour } = easternNow();
  const showCalendar = day >= 1 && day <= 5;
  const showJoin = day === 6 && hour < JOIN_UNTIL_HOUR;
</script>

{#if showCalendar || showJoin}
  <section class="mx-auto px-6 py-2 bg-green-800">
    <div class="max-w-7xl mx-auto px-6">
      <span class="font-bold">Contractors:</span>

      {#if showCalendar}
        <a
          target="_blank"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDZlMW5qajcybzRoNGQ2Y2lsNm5ycW0yZjJfMjAyNjA4MjJUMTQwMDAwWiBjXzA3YTBmOGFiNDQwM2E1OWJmZGNlOTMwYzkwNmJiNzkwNTMyODRjYzQ0NTFjNmIzYTEyNDRmOTcwMGM0NDMxNzVAZw&tmsrc=c_07a0f8ab4403a59bfdce930c906bb79053284cc4451c6b3a1244f9700c443175%40group.calendar.google.com&scp=ALL"
        >
          <span class="underline">
            Click here to add
            <span class="font-bold">FLN - Network Basics</span>
          </span>
        </a>
        to your calendar for Saturday morning
      {/if}

      {#if showJoin}
        <a target="_blank" href="https://meet.google.com/mmf-jcrg-cjd">
          click here to join <span class="font-bold">FLN - Network Basics</span> at 10am Eastern:
          <span class="underline"> meet.google.com/mmf-jcrg-cjd </span>
        </a>
      {/if}
    </div>
  </section>
{/if}
