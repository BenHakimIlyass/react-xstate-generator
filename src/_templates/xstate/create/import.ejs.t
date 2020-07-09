---
to: xstate/index.ts
inject: true
prepend: true
---
import use<%= (h.changeCase.upperCaseFirst(name)) %> from './<%= h.changeCase.lower(name) %>/use<%= (h.changeCase.upperCaseFirst(name)) %>';
