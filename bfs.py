
class test():
    def __init__(self, input):
        self.input = input

    def print(self):
        print(self.input)


class node():
    # using hashmap instead of this
    def __init__(self, name):
        self.name = name
        self.adjNodes = []

    def addAdjNodes(self, newNodes):
        self.adjNodes = self.adjNodes + newNodes

    def getNodes(self):
        return self.adjNodes

    def getName(self):
        return self.name


def main():
    # removed in favor of dict
    # q = node('q')
    # w = node('w')
    # a = node('a')
    # s = node('s')
    # d = node('d')
    # x = node('x')
    # c = node('c')
    # q.addAdjNodes([w, a, s])
    # w.addAdjNodes([q, w, s, d])
    # a.addAdjNodes([q, w, a, s, d])
    # s.addAdjNodes([q, w, a, d, x])
    # d.addAdjNodes([w, s, x, c])
    # x.addAdjNodes([s, d, a, c])
    # c.addAdjNodes([x, d])
    keybd = {}
    keybd['q'] = ['w', 'a', 's']
    keybd['w'] = ['q', 'w', 's', 'd']
    keybd['a'] = ['q', 'w', 'a', 's', 'd']
    keybd['s'] = ['q', 'w', 'a', 'd', 'x']
    keybd['d'] = ['w', 's', 'x', 'c']
    keybd['x'] = ['s', 'd', 'a', 'c']
    keybd['c'] = ['x','d']

 
    print(doBfs('q', 'c', keybd))


def doBfs(start, end, tree):

    stack = tree[start]
    searched = [start]
    # can use parent dict to backtrace to find route!
    parent = {}

    for el in stack:
        parent[el] = start

    while stack:
        curEl = stack.pop(0)

        if curEl == end:
            return f'Found! Backtrace ${parent}'
        elif curEl not in searched:
            searched.append(curEl)
            for toAdd in tree[curEl]:
                if toAdd not in stack and toAdd not in searched:
                    stack = stack + [toAdd]
                    parent[toAdd] = curEl

    
    return 'None found'


if __name__ == '__main__':
    main()
