
function findLoopStart(head) {
    if (!head?.next) {
        return false;
    }

    let slowRunner = head;
    let fastRunner = head;

    while (slowRunner && fastRunner) {
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next?.next;

        if (slowRunner === fastRunner) {
            slowRunner = head;
            while (slowRunner !== fastRunner) {
                slowRunner = slowRunner.next;
                fastRunner = fastRunner.next;
            }

            return slowRunner;
        }
    }

    return false;
}


const a = { value: 'a' };
const b = { value: 'b' };
a.next = b;
const c = { value: 'c' };
b.next = c;
const d = { value: 'd' };
c.next = d;
const e = { value: 'e' };
d.next = e;
const f = { value: 'f' };
e.next = f;
const g = { value: 'g' };
f.next = g;
g.next = c;

console.log(findLoopStart(a));
