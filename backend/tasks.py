from celery import shared_task
from time import sleep


@shared_task(ignore_result=False)
def long_running_task(iterations) -> int:
    result = 0
    for i in range(iterations):
        result += i
        sleep(2)
    return result
